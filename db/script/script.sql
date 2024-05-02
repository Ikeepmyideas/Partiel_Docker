-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 01 mai 2024 à 22:10
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `au_temps_donne`
--

-- --------------------------------------------------------

--
-- Structure de la table `activites`
--

CREATE TABLE `activites` (
  `ID_Activite` int(11) NOT NULL,
  `description` text NOT NULL,
  `date_activite` date NOT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time DEFAULT NULL,
  `titre` varchar(100) NOT NULL,
  `id_lieu` int(11) DEFAULT NULL,
  `nom_service` varchar(100) DEFAULT NULL,
  `nb_benevoles` int(11) DEFAULT 0,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `activites`
--

INSERT INTO `activites` (`ID_Activite`, `description`, `date_activite`, `heure_debut`, `heure_fin`, `titre`, `id_lieu`, `nom_service`, `nb_benevoles`, `date_create`) VALUES
(48, 'zzzzzzzzzzzzz', '2024-05-04', '07:00:00', '08:00:00', 'test', 56, 'Activités Sportives', 33, '2024-04-28 11:40:04'),
(49, 'eree', '2024-07-12', '12:00:00', '14:00:00', 'eeee', 32, '', 44, '2024-04-28 11:42:06'),
(50, 'Eeeeee', '2024-04-29', '08:00:00', '10:00:00', 'eeeeeeeeeeee', 57, 'Aide à la Mobilité', 33, '2024-04-28 11:44:10'),
(51, 'Eeeeee', '2024-04-29', '08:00:00', '10:00:00', 'eeeeeeeeeeee', 58, 'Aide à la Mobilité', 33, '2024-04-28 11:44:10'),
(52, 'ezz', '2024-05-03', '12:00:00', '13:00:00', 'zzz', 59, '', 28, '2024-04-28 11:45:25'),
(53, 'ezz', '2024-05-03', '12:00:00', '13:00:00', 'zzz', 60, '', 28, '2024-04-28 11:45:25'),
(54, 'ezz', '2024-05-23', '12:00:00', '13:00:00', 'zzz', 59, '', 28, '2024-04-28 11:46:25'),
(55, 'ezz', '2024-05-23', '12:00:00', '13:00:00', 'zzz', 59, '', 28, '2024-04-28 11:46:25'),
(56, 'yyyy', '2024-06-25', '11:00:00', '12:00:00', 'yyyy', 61, 'Aide Alimentaire', 44, '2024-04-28 11:47:03'),
(57, 'yyyy', '2024-06-25', '11:00:00', '12:00:00', 'yyyy', 62, 'Aide Alimentaire', 44, '2024-04-28 11:47:03'),
(58, 'pppppppppppppppp', '2024-07-03', '12:33:00', '14:44:00', 'tttttttttt', 32, '', 22, '2024-04-28 12:01:21'),
(59, 'pppppppppppppppp', '2024-07-03', '12:33:00', '14:44:00', 'tttttttttt', 32, '', 22, '2024-04-28 12:01:21'),
(60, 'zeeee', '2024-07-18', '12:00:00', '14:00:00', 'eeezaaddd', 52, '', 33, '2024-04-28 12:18:39'),
(61, 'zeeee', '2024-07-18', '12:00:00', '14:00:00', 'eeezaaddd', 52, '', 33, '2024-04-28 12:18:39'),
(62, 'tgr', '2024-08-14', '13:00:00', '18:00:00', 'htytyuhuty', 40, '', 1, '2024-04-28 12:19:53'),
(63, 'tgr', '2024-08-14', '13:00:00', '18:00:00', 'htytyuhuty', 40, '', 1, '2024-04-28 12:19:53'),
(64, 'rtihyuèiygrtt', '2024-09-09', '14:00:00', '15:00:00', 'hikehuiyjgud', 52, '', 55, '2024-04-28 12:22:46'),
(65, 'rtihyuèiygrtt', '2024-09-09', '14:00:00', '15:00:00', 'hikehuiyjgud', 52, '', 55, '2024-04-28 12:22:46'),
(66, 'zqserdfghj', '2024-08-30', '13:00:00', '15:00:00', 'test', 63, '', 12, '2024-04-28 22:16:44'),
(67, 'zqserdfghj', '2024-08-30', '13:00:00', '15:00:00', 'test', 64, '', 12, '2024-04-28 22:16:44'),
(68, 'hhhhhh', '2024-07-05', '10:00:00', '11:00:00', 'hhhhh', 13, 'Activités Sportives', 13, '2024-04-30 10:40:38'),
(69, 'hhhhhh', '2024-07-05', '10:00:00', '11:00:00', 'hhhhh', 13, 'Activités Sportives', 13, '2024-04-30 10:40:38');

-- --------------------------------------------------------

--
-- Structure de la table `activites_prives`
--

CREATE TABLE `activites_prives` (
  `ID_Activite` int(11) NOT NULL,
  `description` text NOT NULL,
  `date_activite` date NOT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time DEFAULT NULL,
  `titre` varchar(100) NOT NULL,
  `id_lieu` int(11) DEFAULT NULL,
  `nom_service` varchar(100) DEFAULT NULL,
  `id_beneficiaire` int(11) DEFAULT NULL,
  `id_benevole` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `activites_prives`
--

INSERT INTO `activites_prives` (`ID_Activite`, `description`, `date_activite`, `heure_debut`, `heure_fin`, `titre`, `id_lieu`, `nom_service`, `id_beneficiaire`, `id_benevole`) VALUES
(18, 'Description de l\'activité', '2024-05-12', '09:00:00', '12:00:00', 'Titre de l\'activité', 8, 'blabla', 24, 87);

-- --------------------------------------------------------

--
-- Structure de la table `administrateurs`
--

CREATE TABLE `administrateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `beneficiaires` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `code_postal` char(5) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `besoin` text DEFAULT NULL,
  `avis_impot` varchar(255) DEFAULT NULL,
  `statut_validation` varchar(50) DEFAULT NULL,
  `date_adhesion` date DEFAULT NULL,
  `genre` varchar(10) DEFAULT NULL,
  `date_de_naissance` date NOT NULL,
  `mot_de_passe` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `benevoles` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `date_de_naissance` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `competences` text DEFAULT NULL,
  `qualites` text DEFAULT NULL,
  `message_candidature` text DEFAULT NULL,
  `statut_validation` varchar(50) DEFAULT NULL,
  `casier_judiciaire` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `code_postal` char(5) DEFAULT NULL,
  `date_adhesion` date DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `justificatif_permis` varchar(255) DEFAULT NULL,
  `permis_conduire` varchar(3) NOT NULL,
  `langues` varchar(50) NOT NULL,
  `token_activation` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--

CREATE TABLE `benevole_disponibilite` (
  `id_benevole` int(11) NOT NULL,
  `id_disponibilite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `contenu` text NOT NULL,
  `auteur` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `circuit_ramassage` (
  `ID_Circuit` int(11) NOT NULL,
  `date_circuit` date NOT NULL,
  `ID_Route` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commercants_partenaire`
--

CREATE TABLE `commercants_partenaire` (
  `ID_Commercant` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `ID_Adresse` int(11) DEFAULT NULL,
  `telephone` varchar(10) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commercants_partenaire`
--

INSERT INTO `commercants_partenaire` (`ID_Commercant`, `nom`, `email`, `ID_Adresse`, `telephone`, `password`) VALUES
(12, 'jjjj', 'khaaa@gmail.com', 17, '0987654321', NULL),
(23, 'toto', 'toto@gmail.com', NULL, '', '400384'),
(36, 'ssss', 'khakka@gmail.com', NULL, '', '676173');

-- --------------------------------------------------------

--
-- Structure de la table `commercant_circuit`
--

CREATE TABLE `commercant_circuit` (
  `ID_Commercant` int(11) NOT NULL,
  `ID_Circuit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `denrees`
--

CREATE TABLE `denrees` (
  `ID_Denree` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date_peremption` date NOT NULL,
  `quantite` int(11) NOT NULL,
  `ID_Stock` int(11) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `disponibilite`
--

CREATE TABLE `disponibilite` (
  `id_disponibilite` int(11) NOT NULL,
  `jour` varchar(10) NOT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entrepots`
--

CREATE TABLE `entrepots` (
  `ID_Entrepot` int(11) NOT NULL,
  `capacite` int(11) NOT NULL,
  `ID_Adresse` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `evenements_beneficiaires`
--

CREATE TABLE `evenements_beneficiaires` (
  `ID_Evenement_Beneficiaire` int(11) NOT NULL,
  `ID_event` int(11) NOT NULL,
  `ID_Beneficiaire` int(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `evenements_benevoles`
--

CREATE TABLE `evenements_benevoles` (
  `ID_Evenement_Benevole` int(11) NOT NULL,
  `ID_event` int(11) NOT NULL,
  `ID_Benevole` int(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `evenements_benevoles`
--

INSERT INTO `evenements_benevoles` (`ID_Evenement_Benevole`, `ID_event`, `ID_Benevole`, `Date_Inscription`) VALUES
(30, 52, 96, '2024-05-01 17:23:23');

-- --------------------------------------------------------

--
-- Structure de la table `formations`
--

CREATE TABLE `formations` (
  `ID_Formation` int(11) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `heure_debut` time DEFAULT NULL,
  `heure_fin` time DEFAULT NULL,
  `id_lieu` int(11) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `image_profile` (
  `ID_Image` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `ID_Admin` int(11) DEFAULT NULL,
  `ID_Benevole` int(11) DEFAULT NULL,
  `ID_Beneficiaire` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `lieux`
--

CREATE TABLE `lieux` (
  `id_lieu` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `ville` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `lieux`
--



CREATE TABLE `maraudes` (
  `ID_Maraude` int(11) NOT NULL,
  `date_maraude` date NOT NULL,
  `heure_maraude` time NOT NULL,
  `ID_Route` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `newsletters`
--

CREATE TABLE `newsletters` (
  `id` int(11) NOT NULL,
  `date_inscription` datetime NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `newsletters`
--

INSERT INTO `newsletters` (`id`, `date_inscription`, `email`) VALUES
(4, '2024-04-27 23:31:59', 'khaaa@gmail.com'),
(5, '2024-04-27 23:48:24', 'kererer@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL,
  `id_benevole` int(11) DEFAULT NULL,
  `id_beneficiaire` int(11) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date_envoi` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `planning`
--

CREATE TABLE `planning` (
  `ID_Planning` int(11) NOT NULL,
  `planning_date` date NOT NULL,
  `ID_Benevole` int(11) DEFAULT NULL,
  `ID_Activite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `routes`
--

CREATE TABLE `routes` (
  `ID_Route` int(11) NOT NULL,
  `plan_route` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `ID_Service` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--

CREATE TABLE `stocks` (
  `ID_Stock` int(11) NOT NULL,
  `date_collecte` date NOT NULL,
  `statut` varchar(50) DEFAULT NULL,
  `type_denree` varchar(50) NOT NULL,
  `ID_Entrepot` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `date_de_naissance` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `code_postal` char(5) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `role` enum('beneficiaire','benevole') NOT NULL,
  `date_adhesion` date DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `besoin` text DEFAULT NULL,
  `avis_impot` varchar(255) DEFAULT NULL,
  `statut_validation` varchar(50) DEFAULT NULL,
  `competences` text DEFAULT NULL,
  `qualites` text DEFAULT NULL,
  `message_candidature` text DEFAULT NULL,
  `casier_judiciaire` varchar(255) DEFAULT NULL,
  `justificatif_permis` varchar(255) DEFAULT NULL,
  `permis_conduire` varchar(3) DEFAULT NULL,
  `langues` varchar(50) DEFAULT NULL,
  `token_activation` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
ALTER TABLE `activites`
  ADD PRIMARY KEY (`ID_Activite`),
  ADD KEY `id_lieu` (`id_lieu`) USING BTREE;

--
-- Index pour la table `activites_prives`
--
ALTER TABLE `activites_prives`
  ADD PRIMARY KEY (`ID_Activite`),
  ADD KEY `id_beneficiaire` (`id_beneficiaire`),
  ADD KEY `id_benevole` (`id_benevole`),
  ADD KEY `id_lieu` (`id_lieu`);

--
-- Index pour la table `administrateurs`
--
ALTER TABLE `administrateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `beneficiaires`
--
ALTER TABLE `beneficiaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `benevoles`
--
ALTER TABLE `benevoles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `benevole_disponibilite`
--
ALTER TABLE `benevole_disponibilite`
  ADD PRIMARY KEY (`id_benevole`,`id_disponibilite`),
  ADD KEY `id_disponibilite` (`id_disponibilite`);

--
-- Index pour la table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `auteur` (`auteur`);

--
-- Index pour la table `circuit_ramassage`
--
ALTER TABLE `circuit_ramassage`
  ADD PRIMARY KEY (`ID_Circuit`),
  ADD KEY `ID_Route` (`ID_Route`);

--
-- Index pour la table `commercants_partenaire`
--
ALTER TABLE `commercants_partenaire`
  ADD PRIMARY KEY (`ID_Commercant`),
  ADD KEY `ID_Adresse` (`ID_Adresse`);

--
-- Index pour la table `commercant_circuit`
--
ALTER TABLE `commercant_circuit`
  ADD PRIMARY KEY (`ID_Commercant`,`ID_Circuit`),
  ADD KEY `ID_Circuit` (`ID_Circuit`);

--
-- Index pour la table `denrees`
--
ALTER TABLE `denrees`
  ADD PRIMARY KEY (`ID_Denree`),
  ADD KEY `ID_Stock` (`ID_Stock`);

--
-- Index pour la table `disponibilite`
--
ALTER TABLE `disponibilite`
  ADD PRIMARY KEY (`id_disponibilite`);

--
-- Index pour la table `entrepots`
--
ALTER TABLE `entrepots`
  ADD PRIMARY KEY (`ID_Entrepot`),
  ADD KEY `ID_Adresse` (`ID_Adresse`);

--
-- Index pour la table `evenements_beneficiaires`
--
ALTER TABLE `evenements_beneficiaires`
  ADD PRIMARY KEY (`ID_Evenement_Beneficiaire`),
  ADD KEY `ID_event` (`ID_event`),
  ADD KEY `ID_Beneficiaire` (`ID_Beneficiaire`);

--
-- Index pour la table `evenements_benevoles`
--
ALTER TABLE `evenements_benevoles`
  ADD PRIMARY KEY (`ID_Evenement_Benevole`),
  ADD UNIQUE KEY `ID_event` (`ID_event`,`ID_Benevole`),
  ADD KEY `ID_Benevole` (`ID_Benevole`);

--
-- Index pour la table `formations`
--
ALTER TABLE `formations`
  ADD PRIMARY KEY (`ID_Formation`),
  ADD KEY `fk_lieu` (`id_lieu`);

--
-- Index pour la table `image_profile`
--
ALTER TABLE `image_profile`
  ADD PRIMARY KEY (`ID_Image`),
  ADD KEY `ID_Admin` (`ID_Admin`),
  ADD KEY `ID_Benevole` (`ID_Benevole`),
  ADD KEY `ID_Beneficiaire` (`ID_Beneficiaire`);

--
-- Index pour la table `lieux`
--
ALTER TABLE `lieux`
  ADD PRIMARY KEY (`id_lieu`);

--
-- Index pour la table `maraudes`
--
ALTER TABLE `maraudes`
  ADD PRIMARY KEY (`ID_Maraude`),
  ADD KEY `ID_Route` (`ID_Route`);

--
-- Index pour la table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `id_benevole` (`id_benevole`),
  ADD KEY `id_beneficiaire` (`id_beneficiaire`);

--
-- Index pour la table `planning`
--
ALTER TABLE `planning`
  ADD PRIMARY KEY (`ID_Planning`),
  ADD KEY `ID_Benevole` (`ID_Benevole`),
  ADD KEY `ID_Activite` (`ID_Activite`);

--
-- Index pour la table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`ID_Route`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`ID_Service`),
  ADD UNIQUE KEY `unique_nom` (`nom`);

--
-- Index pour la table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`ID_Stock`),
  ADD KEY `ID_Entrepot` (`ID_Entrepot`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_role` (`role`),
  ADD KEY `idx_email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activites`
--
ALTER TABLE `activites`
  MODIFY `ID_Activite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `activites_prives`
--
ALTER TABLE `activites_prives`
  MODIFY `ID_Activite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `administrateurs`
--
ALTER TABLE `administrateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `beneficiaires`
--
ALTER TABLE `beneficiaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT pour la table `benevoles`
--
ALTER TABLE `benevoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT pour la table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `circuit_ramassage`
--
ALTER TABLE `circuit_ramassage`
  MODIFY `ID_Circuit` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commercants_partenaire`
--
ALTER TABLE `commercants_partenaire`
  MODIFY `ID_Commercant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `denrees`
--
ALTER TABLE `denrees`
  MODIFY `ID_Denree` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `disponibilite`
--
ALTER TABLE `disponibilite`
  MODIFY `id_disponibilite` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `entrepots`
--
ALTER TABLE `entrepots`
  MODIFY `ID_Entrepot` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evenements_benevoles`
--
ALTER TABLE `evenements_benevoles`
  MODIFY `ID_Evenement_Benevole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `formations`
--
ALTER TABLE `formations`
  MODIFY `ID_Formation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `image_profile`
--
ALTER TABLE `image_profile`
  MODIFY `ID_Image` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `lieux`
--
ALTER TABLE `lieux`
  MODIFY `id_lieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT pour la table `maraudes`
--
ALTER TABLE `maraudes`
  MODIFY `ID_Maraude` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `planning`
--
ALTER TABLE `planning`
  MODIFY `ID_Planning` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `routes`
--
ALTER TABLE `routes`
  MODIFY `ID_Route` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `ID_Service` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `ID_Stock` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `activites`
--
ALTER TABLE `activites`
  ADD CONSTRAINT `activites_ibfk_1` FOREIGN KEY (`id_lieu`) REFERENCES `lieux` (`id_lieu`);

--
-- Contraintes pour la table `activites_prives`
--
ALTER TABLE `activites_prives`
  ADD CONSTRAINT `activites_prives_ibfk_1` FOREIGN KEY (`id_beneficiaire`) REFERENCES `beneficiaires` (`id`),
  ADD CONSTRAINT `activites_prives_ibfk_2` FOREIGN KEY (`id_benevole`) REFERENCES `benevoles` (`id`),
  ADD CONSTRAINT `activites_prives_ibfk_3` FOREIGN KEY (`id_lieu`) REFERENCES `lieux` (`id_lieu`);

--
-- Contraintes pour la table `benevole_disponibilite`
--
ALTER TABLE `benevole_disponibilite`
  ADD CONSTRAINT `benevole_disponibilite_ibfk_1` FOREIGN KEY (`id_benevole`) REFERENCES `benevoles` (`id`),
  ADD CONSTRAINT `benevole_disponibilite_ibfk_2` FOREIGN KEY (`id_disponibilite`) REFERENCES `disponibilite` (`id_disponibilite`);

--
-- Contraintes pour la table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`auteur`) REFERENCES `administrateurs` (`id`);

--
-- Contraintes pour la table `circuit_ramassage`
--
ALTER TABLE `circuit_ramassage`
  ADD CONSTRAINT `circuit_ramassage_ibfk_1` FOREIGN KEY (`ID_Route`) REFERENCES `routes` (`ID_Route`);

--
-- Contraintes pour la table `commercants_partenaire`
--
ALTER TABLE `commercants_partenaire`
  ADD CONSTRAINT `commercants_partenaire_ibfk_1` FOREIGN KEY (`ID_Adresse`) REFERENCES `lieux` (`id_lieu`);

--
-- Contraintes pour la table `commercant_circuit`
--
ALTER TABLE `commercant_circuit`
  ADD CONSTRAINT `commercant_circuit_ibfk_1` FOREIGN KEY (`ID_Commercant`) REFERENCES `commercants_partenaire` (`ID_Commercant`),
  ADD CONSTRAINT `commercant_circuit_ibfk_2` FOREIGN KEY (`ID_Circuit`) REFERENCES `circuit_ramassage` (`ID_Circuit`);

--
-- Contraintes pour la table `denrees`
--
ALTER TABLE `denrees`
  ADD CONSTRAINT `denrees_ibfk_1` FOREIGN KEY (`ID_Stock`) REFERENCES `stocks` (`ID_Stock`);

--
-- Contraintes pour la table `entrepots`
--
ALTER TABLE `entrepots`
  ADD CONSTRAINT `entrepots_ibfk_1` FOREIGN KEY (`ID_Adresse`) REFERENCES `lieux` (`id_lieu`);

--
-- Contraintes pour la table `evenements_beneficiaires`
--
ALTER TABLE `evenements_beneficiaires`
  ADD CONSTRAINT `evenements_beneficiaires_ibfk_1` FOREIGN KEY (`ID_event`) REFERENCES `activites` (`ID_Activite`),
  ADD CONSTRAINT `evenements_beneficiaires_ibfk_2` FOREIGN KEY (`ID_Beneficiaire`) REFERENCES `beneficiaires` (`id`);

--
-- Contraintes pour la table `evenements_benevoles`
--
ALTER TABLE `evenements_benevoles`
  ADD CONSTRAINT `evenements_benevoles_ibfk_1` FOREIGN KEY (`ID_event`) REFERENCES `activites` (`ID_Activite`),
  ADD CONSTRAINT `evenements_benevoles_ibfk_2` FOREIGN KEY (`ID_Benevole`) REFERENCES `benevoles` (`id`);

--
-- Contraintes pour la table `formations`
--
ALTER TABLE `formations`
  ADD CONSTRAINT `fk_lieu` FOREIGN KEY (`id_lieu`) REFERENCES `lieux` (`id_lieu`);

--
-- Contraintes pour la table `image_profile`
--
ALTER TABLE `image_profile`
  ADD CONSTRAINT `image_profile_ibfk_1` FOREIGN KEY (`ID_Admin`) REFERENCES `administrateurs` (`id`),
  ADD CONSTRAINT `image_profile_ibfk_2` FOREIGN KEY (`ID_Benevole`) REFERENCES `benevoles` (`id`),
  ADD CONSTRAINT `image_profile_ibfk_3` FOREIGN KEY (`ID_Beneficiaire`) REFERENCES `beneficiaires` (`id`);

--
-- Contraintes pour la table `maraudes`
--
ALTER TABLE `maraudes`
  ADD CONSTRAINT `maraudes_ibfk_1` FOREIGN KEY (`ID_Route`) REFERENCES `routes` (`ID_Route`);

--
-- Contraintes pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`id_benevole`) REFERENCES `benevoles` (`id`),
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`id_beneficiaire`) REFERENCES `beneficiaires` (`id`);

--
-- Contraintes pour la table `planning`
--
ALTER TABLE `planning`
  ADD CONSTRAINT `planning_ibfk_1` FOREIGN KEY (`ID_Benevole`) REFERENCES `benevoles` (`id`),
  ADD CONSTRAINT `planning_ibfk_2` FOREIGN KEY (`ID_Activite`) REFERENCES `activites` (`ID_Activite`);

--
-- Contraintes pour la table `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`ID_Entrepot`) REFERENCES `entrepots` (`ID_Entrepot`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;