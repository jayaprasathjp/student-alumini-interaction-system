-- CreateTable
CREATE TABLE `alumni_details` (
    `uid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `regno` VARCHAR(200) NOT NULL,
    `department` VARCHAR(200) NOT NULL,
    `phone` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `domain` VARCHAR(200) NOT NULL,
    `company` VARCHAR(200) NOT NULL,
    `city` VARCHAR(200) NOT NULL,
    `pass_year` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alumni_interaction_program` (
    `uid` INTEGER NOT NULL AUTO_INCREMENT,
    `alumni_name` VARCHAR(200) NOT NULL,
    `department` VARCHAR(200) NOT NULL,
    `date` VARCHAR(200) NOT NULL,
    `time` VARCHAR(200) NOT NULL,
    `venue` VARCHAR(200) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staff_details` (
    `uid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `department` VARCHAR(30) NOT NULL,
    `id` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `domain` VARCHAR(255) NOT NULL,
    `doj` VARCHAR(255) NOT NULL,
    `college_name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(10000) NULL,
    `experience` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`uid`, `id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_details` (
    `uid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `regno` VARCHAR(255) NOT NULL,
    `department` VARCHAR(255) NOT NULL,
    `pass_year` VARCHAR(255) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `domain` VARCHAR(255) NOT NULL,
    `college_name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `city` VARCHAR(200) NOT NULL,
    `aoi` VARCHAR(20) NOT NULL,
    `alumni_interaction` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`uid`, `regno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_staff_interaction` (
    `uid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `regno` VARCHAR(200) NOT NULL,
    `domain` VARCHAR(100) NOT NULL,
    `department` VARCHAR(200) NOT NULL,
    `pass_year` VARCHAR(100) NOT NULL,
    `regarding` VARCHAR(200) NOT NULL,
    `date` VARCHAR(200) NOT NULL,
    `time` VARCHAR(200) NOT NULL,
    `status` VARCHAR(100) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
