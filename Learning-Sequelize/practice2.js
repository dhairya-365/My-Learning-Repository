const { Sequelize, DataTypes, where } = require('sequelize');
const db = new Sequelize('postgres://postgres:*******@localhost:5432/test')


// Defining Model 

const Departments = db.define(
    'Departments',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        designation: {
            type: DataTypes.STRING
        },
        salary: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: 'Departments',
    }
);

// creating a new table name UserDetails using Sequelize 

const UserDetails = db.define(
    'UserDetails',
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dept_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Departments,
                key: 'id'
            }
        }
    }
)

Departments.hasMany(UserDetails, { foreignKey: 'dept_id' });
UserDetails.hasOne(Departments, { foreignKey: 'dept_id' });




// method for creating connection to database.

async function ConnectDB() {
    try {
        await db.authenticate();
        console.log("Connection successfull");
    }
    catch (err) {
        console.log("ERROR : ", err)
    }
    finally {
        await db.close()
    }
}

// simple Insert query

async function addUser() {
    try {
        await db.authenticate();
        console.log("Connection successful.");

        await db.sync();
        console.log("Database Sync successful");

        let dept = await Departments.create(
            {
                designation: "AI Intern",
                salary: 75000
            }
        );
        console.log("Created an entry on department table.");

        let user = await UserDetails.create(
            {
                first_name: "Manthan",
                last_name: "Lad",
                country: "India",
                dept_id: 3,
            }
        );

        console.log("Created an entry on UserDetail table.")

        return user;
    }
    catch (err) {
        console.log("ERR", err)
    }
    finally {
        db.close();
    }
}

// Simple Select Query 

async function display() {
    const users = await UserDetails.findAll({
        attributes: ['first_name', 'last_name'],
    });
    console.log("USER : ", JSON.stringify(users))

    const salary = await Departments.findAll({
        attributes: [
            'designation',
            [db.fn('SUM', db.col('salary')), 'TotalSalary']
        ],
        group: ['designation']
    });

    console.log(salary.map(item => item.toJSON()));
}

// select Query with where clause

async function select_using_where() {
    try {
        const user = await UserDetails.findAll({
            where: {
                user_id: 2,
                first_name: 'Dhairya'
            }
        });

        console.log(JSON.stringify(user));
    }
    catch (err) {
        console.log(err);
    }
    finally {
        db.close();
    }
}

async function update_user(id) {
    try {
        await UserDetails.update(
            {
                first_name: 'Hitman'
            },
            {
                where: {
                    user_id: id
                },
            }
        )
    }
    catch (err) {
        console.log(err);
    }
    finally {
        db.close();
    }
}

async function create_multiple_users() {

    const dept = await Departments.bulkCreate(
        [
            {
                designation: 'AI Intern',
                salary: 50000
            },
            {
                designation: 'AI Intern',
                salary: 40000
            },
            {
                designation: 'AI Intern',
                salary: 70000
            },
            {
                designation: 'AI Intern',
                salary: 60000
            },

        ]
    );

    const users = await UserDetails.bulkCreate(
        [
            {
                first_name: 'Manendra',
                last_name: 'jadeja',
                country: 'India',
                dept_id: dept.id
            },
            {
                first_name: 'Vansh',
                last_name: 'Golakiya',
                country: 'India',
                dept_id: dept.id
            },
            {
                first_name: 'Krish',
                last_name: 'Vaghela',
                country: 'India',
                dept_id: dept.id
            },
            {
                first_name: 'Swayam',
                last_name: 'Parekh',
                country: 'India',
                dept_id: dept.id
            }
        ]);

    return users;
}

async function complete_select_query() {
    try {
        await UserDetails.findAll(
            {
                where: {
                    country: "India",
                },
                // group by also can be added here.
                order: ['salary', 'DESC']
            }
        )
    }
    catch (err) {
        console.log(err);
    }
    finally {
        db.close()
    }
}


// addUser()
// update_user(3);
// create_multiple_users();
complete_select_query()
