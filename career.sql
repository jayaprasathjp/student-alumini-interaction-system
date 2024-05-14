-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 10:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `career`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni_details`
--

CREATE TABLE `alumni_details` (
  `uid` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `regno` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `domain` varchar(200) NOT NULL,
  `company` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `pass_year` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_details`
--

INSERT INTO `alumni_details` (`uid`, `name`, `regno`, `department`, `phone`, `email`, `domain`, `company`, `city`, `pass_year`) VALUES
(12, 'fervgb ', 'fervbgx', 'efrgbg', 'fdsd', 'fasefaer', 'awefvgf', '', 'fefraer', 'safvd'),
(15, 'ds', '21', 'cse', '123', 'kp@gmail', 'web', '', 'karur', '1231');

-- --------------------------------------------------------

--
-- Table structure for table `alumni_interaction_program`
--

CREATE TABLE `alumni_interaction_program` (
  `uid` int(11) NOT NULL,
  `alumni_name` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `time` varchar(200) NOT NULL,
  `venue` varchar(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_interaction_program`
--

INSERT INTO `alumni_interaction_program` (`uid`, `alumni_name`, `department`, `date`, `time`, `venue`, `title`, `email`) VALUES
(18, 'jp', 'CSE', '2024-03-21', '13:38', 'Hall 2', 'soft', 'jayaprasathjp44@gmail.com'),
(20, '', 'CSE', '', '23:44', '', 'wfrfd', ''),
(23, 'few2', 'CSE', '', '', 'Hall 3', 'dewefr', ''),
(24, '', 'CSE', '', '', '', 'rfdg', ''),
(25, 'jpp', 'CSE', '2024-03-27', '14:03', '', 'dwefr', 'jayaprasathjp44@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `staff_details`
--

CREATE TABLE `staff_details` (
  `uid` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `department` varchar(30) NOT NULL,
  `id` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `doj` varchar(255) NOT NULL,
  `college_name` varchar(255) NOT NULL,
  `description` varchar(10000) DEFAULT NULL,
  `experience` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff_details`
--

INSERT INTO `staff_details` (`uid`, `name`, `department`, `id`, `phone`, `email`, `domain`, `doj`, `college_name`, `description`, `experience`) VALUES
(3, 'selvi a', '0', '54', '+919894432092', 'jayaprasathjp44@gmail.com', 'web development', '3533-02-04', 'MKCE', 'i am staff in department of cse', '12343');

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `uid` int(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `regno` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `pass_year` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `college_name` varchar(255) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `aoi` varchar(20) NOT NULL,
  `alumni_interaction` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_details`
--

INSERT INTO `student_details` (`uid`, `name`, `regno`, `department`, `pass_year`, `domain`, `college_name`, `phone`, `email`, `city`, `aoi`, `alumni_interaction`) VALUES
(20, 'qerwstgdhf', 'wgextrhfg', 'wterthyj', 't4e5ryju', 'rr4tshy', 't4e5ryj', '3t45y', '3t4y5', 'at45ys', 'tyh', '4t5y');

-- --------------------------------------------------------

--
-- Table structure for table `student_staff_interaction`
--

CREATE TABLE `student_staff_interaction` (
  `uid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `regno` varchar(200) NOT NULL,
  `domain` varchar(100) NOT NULL,
  `department` varchar(200) NOT NULL,
  `pass_year` varchar(100) NOT NULL,
  `regarding` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `time` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_staff_interaction`
--

INSERT INTO `student_staff_interaction` (`uid`, `name`, `regno`, `domain`, `department`, `pass_year`, `regarding`, `date`, `time`, `status`) VALUES
(17, 'efghj', 'kjb', 'trrdytcfgvjhb', 'esrdxcgfhvbj', 'xxcgbhn', 'dyfbjk', '2024-02-28', '01:41', 'reject'),
(18, 'efghj', 'kjb', 'trrdytcfgvjhb', 'esrdxcgfhvbj', 'xxcgbhn', 'dyfbjk', '', '', 'pending'),
(19, 'efghj', 'kjb', 'trrdytcfgvjhb', 'esrdxcgfhvbj', 'xxcgbhn', 'dyfbjk', '2024-03-12', '23:39', 'pending'),
(20, 'efghj', 'kjb', 'trrdytcfgvjhb', 'esrdxcgfhvbj', 'xxcgbhn', 'dyfbjk', '2024-03-20', '23:40', 'accept'),
(21, 'efghj', 'kjb', 'trrdytcfgvjhb', 'esrdxcgfhvbj', 'xxcgbhn', 'dyfbjk', '', '', 'reject');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni_details`
--
ALTER TABLE `alumni_details`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `alumni_interaction_program`
--
ALTER TABLE `alumni_interaction_program`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `staff_details`
--
ALTER TABLE `staff_details`
  ADD PRIMARY KEY (`uid`,`id`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`uid`,`regno`);

--
-- Indexes for table `student_staff_interaction`
--
ALTER TABLE `student_staff_interaction`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumni_details`
--
ALTER TABLE `alumni_details`
  MODIFY `uid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `alumni_interaction_program`
--
ALTER TABLE `alumni_interaction_program`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `staff_details`
--
ALTER TABLE `staff_details`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `student_details`
--
ALTER TABLE `student_details`
  MODIFY `uid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `student_staff_interaction`
--
ALTER TABLE `student_staff_interaction`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
