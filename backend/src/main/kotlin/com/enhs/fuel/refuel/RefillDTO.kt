package com.enhs.fuel.refuel

import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.GenericGenerator
import org.springframework.stereotype.Component
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class RefillDTO(

    val aircraft: String,
    val amount: Double,
    val fueltype: String,
    val firstname: String,
) {

    @Id @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    var id: String? = null

    @CreationTimestamp
    val created: LocalDateTime = LocalDateTime.now()

    val formatedDate = created.format(DateTimeFormatter.ofPattern("dd/MM - HH:mm"))
}



