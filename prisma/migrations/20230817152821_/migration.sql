-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "taskName" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "userID" INTEGER,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
