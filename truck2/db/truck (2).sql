-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2025 at 08:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `truck`
--

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `petrol` int(50) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'active',
  `end_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id`, `name`, `petrol`, `status`, `end_date`, `created_at`) VALUES
(2, 'Arshpreet ', 800, 'active', '2025-04-28 11:34:18', '2025-04-28 08:47:33'),
(6, 'Arshpreet singh ', 65, 'active', '2025-04-28 15:50:24', '2025-04-28 09:50:55'),
(8, 'tania', 0, 'active', '2025-04-28 11:32:39', '2025-04-28 11:32:39');

-- --------------------------------------------------------

--
-- Table structure for table `trip`
--

CREATE TABLE `trip` (
  `id` int(5) NOT NULL,
  `dr_id` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `task` varchar(50) NOT NULL,
  `petrol` int(50) NOT NULL,
  `kms` int(50) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'pending',
  `com` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trip`
--

INSERT INTO `trip` (`id`, `dr_id`, `title`, `task`, `petrol`, `kms`, `status`, `com`, `created_at`) VALUES
(15, '2', '1st', '1', 0, 56, 'complete', '2025-04-28 10:23:20', '2025-04-28 10:20:49'),
(16, '6', 'tnt', '1', 0, 95, 'complete', '2025-04-28 10:22:35', '2025-04-28 10:20:57'),
(17, '6', 'one', '2', 0, 0, 'pending', '2025-04-28 10:23:58', '2025-04-28 10:23:58'),
(18, '6', 'high', '2', 0, 56, 'complete', '2025-04-28 10:41:23', '2025-04-28 10:24:09'),
(22, '8', '2nd', '1', 0, 0, 'pending', '2025-04-28 11:32:49', '2025-04-28 11:32:49'),
(23, '2', '2nd', '1', 0, 0, 'pending', '2025-04-28 15:38:25', '2025-04-28 15:38:25'),
(24, '2', '2nd', '1', 0, 0, 'pending', '2025-04-28 15:44:38', '2025-04-28 15:44:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trip`
--
ALTER TABLE `trip`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `trip`
--
ALTER TABLE `trip`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
