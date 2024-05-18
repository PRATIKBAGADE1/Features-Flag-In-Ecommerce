package com.zosh.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ui")
public class UIController {
    private String uiVersion = "A";  // Default to UI version A

    @GetMapping("/version")
    public String getUIVersion() {
        return uiVersion;
    }

    @PostMapping("/version")
    public void setUIVersion(@RequestBody String version) {
        this.uiVersion = version;
    }
}
