package com.enhs.fuel.refuel

import org.springframework.stereotype.Service


@Service
class RefillService(val repo: Repository) {
    fun addRefill(refill: RefillDTO): RefillDTO {
        repo.save(refill)

        return refill
    }

    fun getRefillLog(): List<RefillDTO> {
        val refills= mutableListOf<RefillDTO>()
        repo.findAll().forEach { refills.add(it) }

        return refills

    }

}
