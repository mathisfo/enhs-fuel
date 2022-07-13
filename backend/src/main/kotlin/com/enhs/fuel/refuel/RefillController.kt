package com.enhs.fuel.refuel

import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = arrayOf("http://localhost:3000"))
class RefillController(val refillService: RefillService) {

    @PostMapping("/refill/add")
    fun addRefill(@RequestBody refill: RefillDTO): RefillDTO {
         return refillService.addRefill(refill)

    }

    @GetMapping("/refill/log")
    fun getRefillLog(): List<RefillDTO> {
        return refillService.getRefillLog()
    }
}