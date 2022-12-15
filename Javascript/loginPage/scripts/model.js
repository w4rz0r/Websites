const model = {
    
    //input
    inputs: {
        userSignup: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            confirmEmail: null,
            confirmCreation: null, // om denne er true så nullstilles userSignup inputs?
        },
        userLogin: {
            username: '',
            password: '',
        },
    },

    //data
    data: {
        users: [
            {
                username: 'w4rz0r',
                email: 'wanny@example.com',
                password: 'Sl4ught3r_',
            },
            {
                username: 'Snark',
                email: 'Snarky@example.com',
                password: 'Ad4pt0v3rcOm3_',
            },
            {
                username: 'Sjampi',
                email: 'Sjampi@example.com',
                password: 'Pomfri4Fr33_',
            },
        ],
    },

    //views
    state: {
        page: 'createAccount'
    },
}