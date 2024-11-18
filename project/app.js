particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded on Home page.');
});

const app = Vue.createApp({
    data() {
        return {
            darkMode: false,
            sections: [
                {
                    name: "free",
                    title: "Free Section",
                    color: "primary",
                    data: [],
                    winner: null,
                    countdown: null,
                    showMore: false
                },
                {
                    name: "vip",
                    title: "VIP Section",
                    color: "success",
                    data: [],
                    winner: null,
                    countdown: null,
                    showMore: false
                },
                {
                    name: "referrers",
                    title: "Referrers' Section",
                    color: "warning",
                    data: [],
                    winner: null,
                    countdown: null,
                    showMore: false
                }
            ],
            countdownIntervals: {},
            userLimit: 5
        };
    },
    methods: {
        async fetchUsers() {
            const response = await fetch('users.json');
            const users = await response.json();
            this.sections.forEach(section => {
                section.data = users[section.name];
                this.startCountdown(section.name);
            });
        },
        startCountdown(sectionName) {
            const section = this.sections.find(sec => sec.name === sectionName);
            let hours = sectionName === "free" ? 12 : sectionName === "vip" ? 6 : 9;
            const targetTime = new Date().getTime() + hours * 60 * 60 * 1000;

            this.countdownIntervals[sectionName] = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetTime - now;

                if (distance < 0) {
                    clearInterval(this.countdownIntervals[sectionName]);
                    section.countdown = "00:00:00";
                } else {
                    const hours = Math.floor(distance / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    section.countdown = `${hours}:${minutes}:${seconds}`;
                }
            }, 1000);
        },
        drawWinner(sectionName) {
            const section = this.sections.find(sec => sec.name === sectionName);
            if (section.data.length === 0) {
                alert("No users in this section!");
                return;
            }
            const randomIndex = Math.floor(Math.random() * section.data.length);
            section.winner = section.data[randomIndex].username;
        },
        generateQRCode(link, sectionName) {
            const qrElement = document.getElementById(`qr-${sectionName}`);
            qrElement.innerHTML = "";
            new QRCode(qrElement, {
                text: link,
                width: 128,
                height: 128,
                colorDark: "#000000",
                colorLight: "#ffffff",
            });
        },
        showMore(sectionName) {
            const section = this.sections.find(sec => sec.name === sectionName);
            section.showMore = !section.showMore;
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.body.classList.toggle("dark-mode", this.darkMode);
        },
        deleteUser(sectionName, index) {
            const section = this.sections.find(sec => sec.name === sectionName);
            section.data.splice(index, 1);
            this.updateUsersFile();
        },
        updateUser(sectionName, index, updatedUser) {
            const section = this.sections.find(sec => sec.name === sectionName);
            section.data.splice(index, 1, updatedUser);
            this.updateUsersFile();
        },
        async updateUsersFile() {
            const updatedData = {};
            this.sections.forEach(section => {
                updatedData[section.name] = section.data;
            });
            await fetch("users.json", {
                method: "POST",
                body: JSON.stringify(updatedData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    },
    mounted() {
        this.fetchUsers();
    }
});

app.mount("#app");
