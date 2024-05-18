package com.zosh.repository;

// src/main/java/com/example/ecommerce/repository/FeatureFlagRepository.java


import com.zosh.modal.FeatureFlag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


@Repository
public interface FeatureFlagRepository extends JpaRepository<FeatureFlag, String> {
}
