// src/main/java/com/example/ecommerce/model/FeatureFlag.java

package com.zosh.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FeatureFlag {
    @Id
    private String name;
    private boolean enabled;

    public FeatureFlag(String featureName, boolean b) {
        //TODO Auto-generated constructor stub
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
