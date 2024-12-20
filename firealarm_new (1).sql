-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2024 at 06:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `firealarm_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `alert_notifications`
--

CREATE TABLE `alert_notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `device_id` varchar(255) NOT NULL,
  `device_type` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `alert_notifications`
--

INSERT INTO `alert_notifications` (`id`, `device_id`, `device_type`, `location`, `description`, `is_read`, `created_at`, `updated_at`) VALUES
(1, '12222', 'Fire Alarm', 'Pune', 'This is Fire Alerts', 1, '2024-11-25 00:31:52', '2024-11-25 00:32:02'),
(2, '12222', 'Fire Alarm', 'Pune', 'sdsd', 1, '2024-11-25 00:36:47', '2024-11-25 00:36:55'),
(3, '12222', 'Fire Alarm', 'Pune', 'zczcZc', 1, '2024-11-25 00:37:48', '2024-11-25 00:42:11'),
(4, 'Deserunt sed adipisi', 'Ducimus tenetur pla', 'Aut velit minus enim', 'Nulla omnis saepe ap', 1, '2024-11-25 00:38:06', '2024-11-25 00:42:11'),
(5, 'Voluptates omnis seq', 'Ipsa voluptatum adi', 'Dolore doloribus tot', 'Ut et cillum est vo', 1, '2024-11-25 00:38:22', '2024-11-25 00:42:11'),
(6, 'Blanditiis aute labo', 'Unde officia in reru', 'Eu consequatur Non', 'Eius non rerum modi', 1, '2024-11-25 00:43:02', '2024-11-25 00:43:35'),
(7, 'Quam sed corporis po', 'Laborum assumenda se', 'Nam voluptas vitae c', 'Qui et quaerat et ne', 1, '2024-11-25 00:49:05', '2024-11-25 00:50:37'),
(8, 'Eiusmod eligendi ame', 'Nemo in eius nulla r', 'Qui mollit libero at', 'Iusto in autem labor', 1, '2024-11-25 00:51:05', '2024-11-25 00:51:39'),
(9, 'Amet dolorem ipsam', 'Assumenda dolores do', 'Asperiores non nisi', 'Corporis ut minus vo', 1, '2024-11-25 00:53:28', '2024-11-25 00:56:14'),
(10, 'Et eum veritatis qui', 'Do sed natus maxime', 'Et excepturi et odit', 'Laboris corrupti ad', 1, '2024-11-25 01:11:14', '2024-11-25 01:12:21'),
(11, 'Eos deleniti velit e', 'Sapiente sit ad non', 'Aut repudiandae temp', 'Possimus aliqua Iu', 1, '2024-11-25 01:13:21', '2024-11-25 01:13:22'),
(12, 'Pariatur Dignissimo', 'Delectus maiores co', 'Unde cumque sit quo', 'Atque quam dolor occ', 1, '2024-11-25 01:17:09', '2024-11-25 01:17:10'),
(13, 'Inventore accusantiu', 'Rem sed ut in corpor', 'Ratione nobis do est', 'Dolor earum deserunt', 1, '2024-11-25 01:17:21', '2024-11-25 01:17:22'),
(14, 'Doloremque voluptate', 'Molestias excepteur', 'Itaque enim nihil su', 'Et provident tempor', 1, '2024-11-25 01:18:25', '2024-11-25 01:18:26'),
(15, 'Doloremque culpa eos', 'Molestiae sunt quis', 'Porro sed in aut dig', 'Asperiores amet ill', 1, '2024-11-25 01:19:15', '2024-11-25 01:19:15'),
(16, 'Et voluptatibus omni', 'Eos reprehenderit', 'Omnis aliquid aspern', 'Nulla necessitatibus', 1, '2024-11-25 01:25:14', '2024-11-25 01:25:15'),
(17, 'Aliquid fugiat in ip', 'Consequatur mollit t', 'Qui voluptatem Sunt', 'Ex voluptatem sit e', 1, '2024-11-25 01:26:23', '2024-11-25 01:26:23'),
(18, 'Consectetur itaque e', 'Enim mollitia magnam', 'Dolor exercitationem', 'Autem blanditiis eum', 1, '2024-11-25 01:32:14', '2024-11-25 01:32:15'),
(19, 'Enim culpa harum au', 'Amet in officia qui', 'Voluptatem autem ex', 'Animi quisquam qui', 1, '2024-11-25 01:32:33', '2024-11-25 01:32:34');

-- --------------------------------------------------------

--
-- Table structure for table `assign_devices`
--

CREATE TABLE `assign_devices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  `site_id` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_id` bigint(20) DEFAULT NULL,
  `device_type_id` bigint(20) DEFAULT NULL,
  `device_id` varchar(255) DEFAULT NULL,
  `device_name` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`id`, `site_id`, `device_type_id`, `device_id`, `device_name`, `description`, `created_ip_address`, `modified_ip_address`, `created_by`, `modified_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '12222', 'Fire Alarm Pump', 'Hi This is Deepak', '127.0.0.1', NULL, 1, NULL, 'active', '2024-11-28 02:48:06', '2024-11-28 02:48:06'),
(2, 1, 1, '12', '112', '121', '127.0.0.1', NULL, 1, NULL, 'active', '2024-12-11 01:23:57', '2024-12-11 01:23:57');

-- --------------------------------------------------------

--
-- Table structure for table `device_type_masters`
--

CREATE TABLE `device_type_masters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `device_type` text DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `device_type_masters`
--

INSERT INTO `device_type_masters` (`id`, `device_type`, `created_ip_address`, `modified_ip_address`, `created_by`, `modified_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Fire Alarm 12', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-11-25 03:12:36', '2024-12-16 04:53:48'),
(2, 'Pump', '127.0.0.1', NULL, 1, NULL, 'active', '2024-11-26 00:28:20', '2024-11-26 00:28:20'),
(3, 'Fire Alarm 2', '127.0.0.1', '127.0.0.1', 1, 1, 'active', '2024-12-10 03:56:33', '2024-12-10 03:56:33'),
(7, 'aaaa', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 01:01:34', '2024-12-12 01:01:34'),
(8, '1212', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 01:04:28', '2024-12-12 01:04:28'),
(9, NULL, '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 01:11:04', '2024-12-12 01:11:04'),
(10, NULL, '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 01:11:09', '2024-12-12 01:11:09'),
(11, 'test', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 04:31:50', '2024-12-12 04:31:50'),
(12, 'test', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 04:33:13', '2024-12-12 04:33:13'),
(13, 'test', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 04:33:29', '2024-12-12 04:33:29'),
(14, 'ZXZXZXZX', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 04:33:44', '2024-12-12 04:33:44'),
(15, 'Fire Alarm 278', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-16 04:54:14', '2024-12-17 03:52:56'),
(16, 'asasas', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-16 04:55:28', '2024-12-16 04:55:28'),
(17, 'opiuiyouiouopiopipo', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-17 03:53:11', '2024-12-17 03:53:11');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  `map_link` longtext DEFAULT NULL,
  `facebook_url` varchar(255) DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `instagram_url` varchar(255) DEFAULT NULL,
  `twitter_url` varchar(255) DEFAULT NULL,
  `skype_url` varchar(255) DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_admins`
--

CREATE TABLE `master_admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile_no` varchar(255) DEFAULT NULL,
  `role_id` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `user_profile_image_path` varchar(255) DEFAULT NULL,
  `user_profile_image_name` varchar(255) DEFAULT NULL,
  `fcm_token` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `api_token` varchar(255) DEFAULT NULL,
  `otp` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `master_admins`
--

INSERT INTO `master_admins` (`id`, `user_type`, `user_id`, `user_name`, `email`, `password`, `mobile_no`, `role_id`, `address`, `user_profile_image_path`, `user_profile_image_name`, `fcm_token`, `access_token`, `last_login`, `remember_token`, `api_token`, `otp`, `status`, `created_ip_address`, `modified_ip_address`, `created_by`, `modified_by`, `created_at`, `updated_at`) VALUES
(1, 'system', NULL, 'Admin', 'admin@gmail.com', '$2y$10$0AVkTepXHUcEZlAqLgwPI.A3dMtsXeu9BWSXmtfEuibfb79UCY1HK', NULL, '1', NULL, NULL, NULL, NULL, NULL, '2024-12-19 05:10:29', NULL, NULL, NULL, 'active', NULL, NULL, NULL, NULL, NULL, '2024-12-18 23:40:29'),
(2, 'system', NULL, 'Deepak', 'deepak@gmail.com', '$2y$10$H96yJAyONnwqzbJmFp5nW.sgDoE.IWT21K8/WyXsenu7p3P9Z7lHG', '7310560108', '3', 'Codepix Pune Maharastra', NULL, NULL, NULL, NULL, '2024-11-27 06:37:53', NULL, NULL, NULL, 'active', '127.0.0.1', NULL, 1, NULL, '2024-11-27 01:02:56', '2024-11-27 01:07:53'),
(3, 'system', NULL, 'Ashvini Bhone', 'aashubhone@gmail.com', '$2y$10$H4N.oTXGxOOLX1epyOljTeQdPHHmJkWoA0UHrLt7j8zX9vo/y4xhC', '9552246484', '4', 'vishrantWadi ,pune', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'active', '127.0.0.1', NULL, 1, NULL, '2024-12-17 06:37:24', '2024-12-17 06:37:24');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_07_05_075239_create_master_admins_table', 1),
(6, '2023_07_13_034312_create_general_settings_table', 1),
(7, '2023_08_22_102532_create_role_privileges_table', 1),
(8, '2023_08_28_112847_create_visual_settings_table', 1),
(9, '2024_11_25_043851_create_alert_notifications_table', 2),
(11, '2024_11_25_070606_create_device_type_masters_table', 3),
(12, '2024_11_26_063603_create_site_masters_table', 4),
(13, '2024_11_28_060802_create_devices_table', 5),
(14, '2024_12_16_091649_create_assign_devices_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `hierarchy_level` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `hierarchy_level`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 1, '2024-11-27 07:16:24', NULL),
(2, 'Admin', 2, '2024-11-27 07:16:24', NULL),
(3, 'Client Admin', 3, '2024-11-27 07:16:24', NULL),
(4, 'Client Operator', 4, '2024-11-27 07:16:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_privileges`
--

CREATE TABLE `role_privileges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `privileges` text DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_privileges`
--

INSERT INTO `role_privileges` (`id`, `role_name`, `privileges`, `created_ip_address`, `modified_ip_address`, `created_by`, `modified_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'dashboard_view, device_type_master_view, site_master_view, device_type_masterrole_privileges_view, user_view, device_view, map_site_view, alarm_view, report_view, device_master_add, site_master_add, role_privileges_add, user_add, device_add, map_site_add, alarm_add, report_add, device_master_edit, site_master_edit, role_privileges_edit, user_edit, device_edit, map_site_edit, alarm_edit, report_edit, device_type_master_delete, site_master_delete, role_privileges_delete, user_delete, device_delete, map_site_delete, alarm_delete, report_delete, device_type_master_status_change, site_master_status_change, role_privileges_status_change, user_status_change, device_status, map_site_status, alarm_status, report_status_change,device_type_master_edit', NULL, '127.0.0.1', NULL, 1, 'active', NULL, '2024-11-25 03:53:55'),
(3, 'Admin', 'dashboard_view,device_type_master_view,device_master_add,device_master_edit,device_type_master_delete,device_type_master_status_change,site_master_view,site_master_add,site_master_edit,site_master_delete,site_master_status_change,role_privileges_view,role_privileges_add,role_privileges_edit,role_privileges_delete,role_privileges_status_change,user_view,user_add,user_edit,user_delete,user_status_change,device_view,device_add,device_edit,device_delete,device_status,map_site_view,map_site_add,map_site_edit,map_site_delete,map_site_status,alarm_view,alarm_edit,alarm_add,alarm_delete,alarm_status,report_view,report_add', '127.0.0.1', '127.0.0.1', 1, 1, 'active', '2024-11-15 05:28:04', '2024-11-27 01:36:03'),
(4, 'Client Admin', 'dashboard_view,alarm_view,reports_view,reports_view', '127.0.0.1', '127.0.0.1', 1, 1, 'active', '2024-11-15 05:32:08', '2024-11-26 04:46:26'),
(5, 'Client Operator', 'dashboard_view,device_type_master_view,device_master_add,device_master_edit,device_type_master_delete,device_type_master_status_change,site_master_view,site_master_add,site_master_edit,site_master_delete,site_master_status_change,role_view,role_view,role_add,role_edit,role_delete,role_status,system_user_view,system_user_add,system_user_edit,system_user_delete,role_status,device_management_view,device_view,device_add,device_edit,device_delete,device_status,map_site_view,map_site_add,map_site_edit,map_site_delete,map_site_status,alarm_view,alarm_edit,alarm_add,alarm_delete,alarm_status,reports_view,reports_edit,reports_view,reports_delete,reports_status', '127.0.0.1', NULL, 1, NULL, 'active', '2024-11-26 04:47:07', '2024-11-26 04:47:07');

-- --------------------------------------------------------

--
-- Table structure for table `site_masters`
--

CREATE TABLE `site_masters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `site_address` longtext DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `site_masters`
--

INSERT INTO `site_masters` (`id`, `site_name`, `site_address`, `created_ip_address`, `modified_ip_address`, `created_by`, `modified_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Codepix  111', 'Swami Plot No 166, Gajanan Nagar, 1/1/1, opposite ASHTAVINAYAK CITY, next to Pearl Society, Maharashtra Vidhyut Department Quarters, Phursungi, Pune, Maharashtra 412308', '127.0.0.1', '127.0.0.1', 1, 1, 'active', '2024-11-26 01:31:05', '2024-12-11 04:15:43'),
(2, NULL, NULL, '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-11-28 02:46:18', '2024-11-28 02:46:18'),
(3, 'aa', 'aa', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-12 03:59:49', '2024-12-12 03:59:49'),
(4, 'ashu', 'Swami Plot No 166, Gajanan Nagar, 1/1/1, opposite ASHTAVINAYAK CITY, next to Pearl Society, Maharashtra Vidhyut Department Quarters, Phursungi, Pune, Maharashtra 412308', '127.0.0.1', '127.0.0.1', 1, 1, 'active', '2024-12-12 23:53:36', '2024-12-13 00:08:57'),
(5, 'asas', 'asasas', '127.0.0.1', '127.0.0.1', 1, 1, 'delete', '2024-12-13 01:07:47', '2024-12-13 01:07:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `visual_settings`
--

CREATE TABLE `visual_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo_image_path` varchar(255) DEFAULT NULL,
  `logo_image_name` varchar(255) DEFAULT NULL,
  `mini_logo_image_path` varchar(255) DEFAULT NULL,
  `mini_logo_image_name` varchar(255) DEFAULT NULL,
  `logo_email_image_path` varchar(255) DEFAULT NULL,
  `logo_email_image_name` varchar(255) DEFAULT NULL,
  `favicon_image_path` varchar(255) DEFAULT NULL,
  `favicon_image_name` varchar(255) DEFAULT NULL,
  `created_ip_address` varchar(255) DEFAULT NULL,
  `modified_ip_address` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `modified_by` bigint(20) DEFAULT NULL,
  `status` enum('active','delete','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alert_notifications`
--
ALTER TABLE `alert_notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assign_devices`
--
ALTER TABLE `assign_devices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `device_type_masters`
--
ALTER TABLE `device_type_masters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_admins`
--
ALTER TABLE `master_admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indexes for table `role_privileges`
--
ALTER TABLE `role_privileges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_masters`
--
ALTER TABLE `site_masters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `visual_settings`
--
ALTER TABLE `visual_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alert_notifications`
--
ALTER TABLE `alert_notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `assign_devices`
--
ALTER TABLE `assign_devices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `device_type_masters`
--
ALTER TABLE `device_type_masters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_admins`
--
ALTER TABLE `master_admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role_privileges`
--
ALTER TABLE `role_privileges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `site_masters`
--
ALTER TABLE `site_masters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `visual_settings`
--
ALTER TABLE `visual_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;