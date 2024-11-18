particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded on Admin page.');
});

const adminApp = Vue.createApp({
    data() {
        return {
            sections: [
                { name: 'free', title: 'Free Section', color: 'primary', users: [] },
                { name: 'vip', title: 'VIP Section', color: 'success', users: [] },
                { name: 'referrers', title: 'Referrers Section', color: 'warning', users: [] }
            ]
        };
    },
    methods: {
        loadUsers() {
            fetch('users.json')
                .then(response => response.json())
                .then(data => {
                    this.sections[0].users = data.free;
                    this.sections[1].users = data.vip;
                    this.sections[2].users = data.referrers;
                });
        },
        saveUsers() {
            const users = {
                free: this.sections[0].users,
                vip: this.sections[1].users,
                referrers: this.sections[2].users
            };
            fetch('users.json', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(users)
            });
        },
        editUser(sectionName, index) {
            const newUsername = prompt('Enter new username:');
            if (newUsername) {
                this.sections.find(section => section.name === sectionName).users[index].username = newUsername;
                this.saveUsers();
            }
        },
        deleteUser(sectionName, index) {
            this.sections.find(section => section.name === sectionName).users.splice(index, 1);
            this.saveUsers();
        },
        showMore(sectionName) {
            const section = this.sections.find(section => section.name === sectionName);
            alert(`Displaying all users in ${section.title}`);
            // Expand or show additional users logic
        }
    },
    mounted() {
        this.loadUsers();
    }
});

adminApp.mount('#admin');
