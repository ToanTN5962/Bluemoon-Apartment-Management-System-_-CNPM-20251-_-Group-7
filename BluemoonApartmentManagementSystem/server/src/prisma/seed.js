const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
        fullName: 'Test User',
        dateOfBirth: new Date('2005-09-26'),
        sex: 'MALE',
        phoneNum: '0123456789',
        email: 'testuser@gmail.com',
        password: '12345678',
        isActive: true,
        role: 'USER',
        resident: {
            create: {
                fullName: 'Test User',
                identificationNumber: '123456789',
                status: 'PERMANENT',
                household: {
                    create: {
                        roomNumber: 101,
                        owner: 'Test User',
                    }
                }
            }
        }
    }
  });
  
  
  const newAdmin = await prisma.user.create({
    data: {
        fullName: 'Admin Test',
        dateOfBirth: new Date('2000-01-01'),
        sex: 'MALE',
        phoneNum: '0987654321',
        email: 'admin@gmail.com',
        password: 'admin123',
        isActive: true,
        role: 'ADMIN',
    }
  })

  console.log('Seeded users:', {newUser, newAdmin});
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })