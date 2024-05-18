package com.zosh.service;

// src/main/java/com/example/ecommerce/service/FeatureFlagService.java



import com.zosh.modal.FeatureFlag;
import com.zosh.repository.FeatureFlagRepository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

//import org.springframework.stereotype.Service;

@Service
public class FeatureFlagService {

    private boolean homepageDesignVariant = false; // Default is false (homepage.jsx)

    public boolean getHomepageDesignVariant() {
        return homepageDesignVariant;
    }

    public void setHomepageDesignVariant(boolean enabled) {
        homepageDesignVariant = enabled;
    }
}
