package com.enhs.fuel.refuel

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository;

@Repository
interface Repository : CrudRepository<RefillDTO, Long> {

}

