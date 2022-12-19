import { PrismaClient } from '@prisma/client'
import SegfaultHandler from "segfault-handler"

const prisma = new PrismaClient()


async function main() {

  SegfaultHandler.registerHandler("crash.log")
  const user = await prisma.user.findMany({

    where: {

      name: 'Alice',

      email: 'alice@prisma.io',

    },

  })

  console.log(user)

}


main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })
