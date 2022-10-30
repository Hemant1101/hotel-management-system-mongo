const adminjs = require("adminjs");
const adminjsMongoose = require("@adminjs/mongoose");
const adminjsExpress = require("@adminjs/express");
adminjs.registerAdapter(adminjsMongoose);

const Users = require("../models/User");
const Rooms = require("../models/Rooms");

const admin = new adminjs(
    {
        resources: [User, Rooms],
        branding: {
            companyName: "Hotel Management System Admin",
            softwareBrothers: false,
            logo: "",
        },
        locale: {
            translations: {
                messages: {
                    loginWelcome: "Administration Panel - Login", // the smaller text
                },
                labels: {
                    loginWelcome: "Hotel Management System", // this could be your project name
                },
            },
        },
    }
);

const router = adminjsExpress.buildAuthenticatedRouter(admin, {
    authenticate: async (email, password) => {
        if (
            process.env.ADMIN_PASSWORD === password &&
            process.env.ADMIN_EMAIL === email
        ) {
            return {
                email: "LOL",
                password: "1300135",
            };
        }
        return null;
    },
    cookieName: "HotelTranselvania",
    cookiePassword: "some-secret-password-used-to-secure-cookie",
});

module.exports = { router, admin };
