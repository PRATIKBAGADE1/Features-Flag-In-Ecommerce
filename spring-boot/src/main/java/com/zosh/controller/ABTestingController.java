package com.zosh.controller;

import com.zosh.modal.ABTestingStatus;
import com.zosh.repository.ABTestingStatusRepsitory;

//import org.hibernate.sql.results.LoadingLogger_.logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/abtesting")
@CrossOrigin(origins = "http://localhost:3000")
public class ABTestingController {

    @Autowired
    private ABTestingStatusRepsitory statusRepository;

    @GetMapping("/experimental-ui")
    public ResponseEntity<ABTestingStatus> getExperimentalUIStatus() {
        ABTestingStatus status = statusRepository.findById(1L).orElse(new ABTestingStatus());
        return ResponseEntity.ok(status);
    }

    @PostMapping("/toggle-ui")
    public ResponseEntity<ABTestingStatus> toggleExperimentalUI(@RequestParam("isUseExperimentalUI") boolean isUseExperimentalUI) {
        try {
            ABTestingStatus status = statusRepository.findById(1L).orElse(new ABTestingStatus());
            status.setUseExperimentalUI(isUseExperimentalUI);
            statusRepository.save(status);
            return ResponseEntity.ok(status);
        } catch (Exception e) {
            // Log the exception
            //logger.error("Error toggling A/B testing status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    
    
    
}
