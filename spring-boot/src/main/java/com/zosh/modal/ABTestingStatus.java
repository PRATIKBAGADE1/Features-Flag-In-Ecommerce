// ABTestingStatus.java
package com.zosh.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class ABTestingStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String featureName;

    private boolean useExperimentalUI;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFeatureName() {
        return featureName;
    }

    public void setFeatureName(String featureName) {
        this.featureName = featureName;
    }

    public boolean isUseExperimentalUI() {
        return useExperimentalUI;
    }

    public void setUseExperimentalUI(boolean useExperimentalUI) {
        this.useExperimentalUI = useExperimentalUI;
    }
    // public void setUseExperimentalUI(boolean useExperimentalUI) {
    //     this.useExperimentalUI = useExperimentalUI;
    // }

  
    // Getters and setters
}