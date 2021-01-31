USE tcgcollections;

-- tcgcollections.collections definition

CREATE TABLE `collections` (
  `short_description` varchar(100) NOT NULL DEFAULT '',
  `long_description` varchar(250) NOT NULL DEFAULT '',
  `snapshot_date` date NOT NULL,
  `open_for_offers` tinyint(4) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- tcgcollections.items definition

CREATE TABLE `items` (
  `is_principle` tinyint(4) NOT NULL,
  `is_graded` tinyint(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `aproximated_value` double NOT NULL,
  `collection_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `items_FK` (`collection_id`),
  CONSTRAINT `items_FK` FOREIGN KEY (`id`) REFERENCES `collections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;