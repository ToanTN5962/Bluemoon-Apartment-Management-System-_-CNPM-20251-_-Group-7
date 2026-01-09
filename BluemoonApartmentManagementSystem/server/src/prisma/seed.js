const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  /* =======================
     HOUSEHOLD
  ======================== */
  const household101 = await prisma.household.upsert({
    where: { roomNumber: 101 },
    update: {},
    create: {
      roomNumber: 101,
      owner: 'Nguyen Van A'
    }
  });

  const household102 = await prisma.household.upsert({
    where: { roomNumber: 102 },
    update: {},
    create: {
      roomNumber: 102,
      owner: 'Tran Thi B'
    }
  });

  const household201 = await prisma.household.upsert({
    where: { roomNumber: 201 },
    update: {},
    create: {
      roomNumber: 201,
      owner: 'Le Van C'
    }
  });

  /* =======================
     RESIDENT
  ======================== */
  const residentA = await prisma.resident.upsert({
    where: { identificationNumber: 'ID101' },
    update: {},
    create: {
      fullName: 'Nguyen Van A',
      identificationNumber: 'ID101',
      status: 'PERMANENT',
      householdId: household101.id
    }
  });

  const residentB = await prisma.resident.upsert({
    where: { identificationNumber: 'ID102' },
    update: {},
    create: {
      fullName: 'Tran Thi B',
      identificationNumber: 'ID102',
      status: 'PERMANENT',
      householdId: household102.id
    }
  });

  const residentC = await prisma.resident.upsert({
    where: { identificationNumber: 'ID201' },
    update: {},
    create: {
      fullName: 'Le Van C',
      identificationNumber: 'ID201',
      status: 'TEMPORARY',
      householdId: household201.id
    }
  });

  /* =======================
     USER (NHIỀU USER)
  ======================== */
  const userA = await prisma.user.upsert({
    where: { email: 'userA@gmail.com' },
    update: {},
    create: {
      fullName: 'Nguyen Van A',
      dateOfBirth: new Date('1995-05-10'),
      sex: 'MALE',
      phoneNum: '0900000001',
      email: 'userA@gmail.com',
      password: '123456',
      isActive: true,
      role: 'USER',
      residentId: residentA.id
    }
  });

  const userB = await prisma.user.upsert({
    where: { email: 'userB@gmail.com' },
    update: {},
    create: {
      fullName: 'Tran Thi B',
      dateOfBirth: new Date('1998-08-20'),
      sex: 'FEMALE',
      phoneNum: '0900000002',
      email: 'userB@gmail.com',
      password: '123456',
      isActive: true,
      role: 'USER',
      residentId: residentB.id
    }
  });

  const userC = await prisma.user.upsert({
    where: { email: 'userC@gmail.com' },
    update: {},
    create: {
      fullName: 'Le Van C',
      dateOfBirth: new Date('2000-03-15'),
      sex: 'MALE',
      phoneNum: '0900000003',
      email: 'userC@gmail.com',
      password: '123456',
      isActive: true,
      role: 'USER',
      residentId: residentC.id
    }
  });

  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      fullName: 'Admin System',
      sex: 'MALE',
      phoneNum: '0999999999',
      email: 'admin@gmail.com',
      password: 'admin123',
      isActive: true,
      role: 'ADMIN'
    }
  });

  /* =======================
     FEE
  ======================== */
  const feeService = await prisma.fee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Phí quản lý',
      amount: 200000,
      cycle: 'MONTHLY'
    }
  });

  const feeParking = await prisma.fee.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Phí gửi xe',
      amount: 100000,
      cycle: 'MONTHLY'
    }
  });

  /* =======================
     BILL + PAYMENT
  ======================== */
  const bill101 = await prisma.bill.create({
    data: {
      householdId: household101.id,
      feeId: feeService.id,
      total: 200000,
      paidStatus: 'PAID',
      payment: {
        create: {
          amount: 200000,
          method: 'CASH'
        }
      }
    }
  });

  const bill102 = await prisma.bill.create({
    data: {
      householdId: household102.id,
      feeId: feeParking.id,
      total: 100000,
      paidStatus: 'UNPAID'
    }
  });

  /* =======================
     COMPLAINT
  ======================== */
  await prisma.complaint.create({
    data: {
      userId: userA.id,
      content: 'Thang máy hoạt động không ổn định'
    }
  });

  await prisma.complaint.create({
    data: {
      userId: userB.id,
      content: 'Hệ thống nước sinh hoạt bị yếu'
    }
  });

  console.log('✅ Seed data successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
