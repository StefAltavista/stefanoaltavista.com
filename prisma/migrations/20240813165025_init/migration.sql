-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "gitHub" TEXT NOT NULL,
    "logo" TEXT[],
    "images" TEXT[],
    "background" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "functionality" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
