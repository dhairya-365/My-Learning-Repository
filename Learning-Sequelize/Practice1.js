const Employee = require('./Employee');

async function testDatabase() {
    try {
        const newEmp = await Employee.create({
            first_name: 'Dhairya',
            last_name: 'Vaghela',
            email: 'dhairyavaghela12@openai.com',
            gender: 'male',
            salary: 85000,
            address: '123 Tech Lane',
            car_id: null
        });
        console.log('Inserted:', newEmp.first_name, newEmp.last_name);

        const { Op, JSON } = require('sequelize');
        const highEarners = await Employee.findAll({
            where: {
                salary: {
                    [Op.gt]: 25000
                }
            }
        });
        console.log(`Found ${highEarners.length} high earners.`);
        console.log(highEarners.map(emp => emp.toJSON()));

    } catch (error) {
        console.error('Error executing queries:', error);
    }
}

testDatabase();