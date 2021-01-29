-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 29 jan. 2021 à 11:09
-- Version du serveur :  10.4.16-MariaDB
-- Version de PHP : 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cv_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `firstName` varchar(512) NOT NULL,
  `lastName` varchar(512) NOT NULL,
  `appTitle` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `applicants`
--

INSERT INTO `applicants` (`id`, `firstName`, `lastName`, `appTitle`) VALUES
(2, 'Marc Xavier a', 'Smith smith', 'Développeur Back-End'),
(4, 'Edouard', 'Durand-Viel', 'Développeur Front-End'),
(7, 'Paul', 'Adams', 'Dev');

-- --------------------------------------------------------

--
-- Structure de la table `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `title` varchar(512) NOT NULL,
  `desc` varchar(512) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `applicantsId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `experiences`
--

INSERT INTO `experiences` (`id`, `title`, `desc`, `start`, `end`, `applicantsId`) VALUES
(1, 'Développeur Front-End', 'Au sein d\'une agence de création de site web sur-mesure, en charge du développement front-end', '2021-01-04 14:10:07', '2021-01-04 14:10:07', 1),
(2, 'Développeur', 'Au sein d\'une agence de communication, en charge du développement front-end', '2019-01-04 14:10:07', '2020-01-04 14:10:07', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
