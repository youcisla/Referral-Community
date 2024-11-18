particlesJS.load('particles-js', 'particles.json', function () {
    console.log('Particles.js loaded on Leaderboard page.');
});

const leaderboardApp = Vue.createApp({
    data() {
        return {
            sections: [
                {
                    name: 'free',
                    title: 'Free Section',
                    color: 'primary',
                    users: []
                },
                {
                    name: 'vip',
                    title: 'VIP Section',
                    color: 'success',
                    users: []
                },
                {
                    name: 'referrers',
                    title: 'Referrers Section',
                    color: 'warning',
                    users: []
                }
            ]
        };
    },
    methods: {
        loadLeaderboardData() {
            fetch('users.json')
                .then(response => response.json())
                .then(data => {
                    this.sections[0].users = data.free.sort((a, b) => b.referrals - a.referrals);
                    this.sections[1].users = data.vip.sort((a, b) => b.referrals - a.referrals);
                    this.sections[2].users = data.referrers.sort((a, b) => b.referrals - a.referrals);
                });
        }
    },
    mounted() {
        this.loadLeaderboardData();
    }
});

leaderboardApp.mount('#leaderboard');
