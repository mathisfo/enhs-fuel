package com.enhs.fuel

import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication


@SpringBootApplication(exclude = arrayOf(DataSourceAutoConfiguration::class))
class FuelApplication

fun main(args: Array<String>) {
	runApplication<FuelApplication>(*args)
}
