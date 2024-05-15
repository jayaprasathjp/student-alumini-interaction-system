-- CreateTable
CREATE TABLE `student_alumni_interaction` (
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
