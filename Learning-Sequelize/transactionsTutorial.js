const Sequelize = require('sequelize');
const db = Sequelize("postgres://postgres:admin@localhost:5432/test");
const employee_db = require('./Employee')

async function perfrom_transaction() {
    const transactions = await db.transaction();
    try {
        const user = await employee_db.create(
            {
                first_name: "Dhairya",
                last_name: "Vaghela",
                email: 'dhairya.v@sarvadhi.com',
                gender: "male",
                salary: 10000,
                address: "Surat",
                car_id: 5,
            }
        )
        await transactions.commit();
        console.log("Commit successful Data has been stored correctly.")
    }
    catch (err) {
        console.log(err);
        console.log("Rollbacking");
        await transactions.rollback();
    }
}

