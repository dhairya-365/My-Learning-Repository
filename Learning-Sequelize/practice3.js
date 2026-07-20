const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize("postgres://postgres:admin@localhost/test");

async function connect() {
    try {
        await db.authenticate();
        console.log("Connected");
        const [results, metadata] = await db.query('SELECT * FROM \"UserDetails\";');
        console.log(results);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        db.close();
    }
}


const EmployeeDetails = db.define(
    "EmployeeDetails",
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        db,
        paranoid: true,
        deletedAt: 'destroyTime'
    },
);

// using bind parameters 

async function getUser() {
    const user = await db.query("SELECT * FROM \"UserDetails\" WHERE user_id = $1;", {
        bind: [3],
        type: db.QueryTypes.SELECT,
    });
    console.log(user)
}

getUser()