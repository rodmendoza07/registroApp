-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2016 a las 02:04:35
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre_cliente` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre_cliente`) VALUES
(1, 'Select Estratégia S.C.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `apaterno` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `amaterno` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `id_empresa`, `nombre`, `apaterno`, `amaterno`) VALUES
(1, 1, 'Luis Rodrigo', 'Mendoza', 'Rodríguez'),
(2, 1, 'Dámaris', 'García', 'Pacheco'),
(3, 1, 'Chuchito', 'Pérez', 'López');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `nombre_empresa` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `nombre_empresa`) VALUES
(1, 'Core Technology Solutions');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `nombre_evento` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lugar_evento` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_convocatoria_i` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecha_convocatoria_f` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estatus` tinyint(1) NOT NULL DEFAULT '0',
  `fecha_evento_dia` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `nombre_evento`, `lugar_evento`, `fecha_convocatoria_i`, `fecha_convocatoria_f`, `fecha_creacion`, `estatus`, `fecha_evento_dia`) VALUES
(1, 'Prueba 1', 'Crowne Plaza Napoles', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2016-09-20 21:19:06', 1, '2016-09-30 15:00:00'),
(2, 'Prueba 2', 'Crowne Plaza Polanco', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2016-09-20 21:19:16', 1, '2016-10-01 15:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos_invitados`
--

CREATE TABLE `eventos_invitados` (
  `id` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_invitado` int(11) NOT NULL,
  `fecha_invitacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_confirmacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `estatus` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `eventos_invitados`
--

INSERT INTO `eventos_invitados` (`id`, `id_evento`, `id_invitado`, `fecha_invitacion`, `fecha_confirmacion`, `estatus`) VALUES
(1, 1, 1, '2016-09-21 02:50:44', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `nombres` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `apaterno` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amaterno` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuarios`, `nombres`, `apaterno`, `amaterno`, `email`, `user_name`, `password`, `fecha_creacion`) VALUES
(1, 'hola', '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', '2016-10-10 23:56:16'),
(2, 'hola', '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', '2016-10-10 23:56:52'),
(3, 'como estas', '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', '2016-10-10 23:58:16'),
(4, 'asdfasd', 'dsfasdf', 'adsfasd', 'asdfasdf', 'asdfasdf', '08afd6f9ae0c6017d105b4ce580de885', '2016-10-10 23:59:28'),
(5, 'wertwer', 'wertwertw', 'twertr', 'twertwert', 'werter', '4c33a53364568171f03cd76c991e4d3d', '2016-10-11 00:02:09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos_invitados`
--
ALTER TABLE `eventos_invitados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuarios`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `eventos_invitados`
--
ALTER TABLE `eventos_invitados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
