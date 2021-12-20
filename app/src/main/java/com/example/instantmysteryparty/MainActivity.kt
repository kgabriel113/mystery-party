package com.example.instantmysteryparty

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.navigation.findNavController
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {


        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setupNav()
    }

    private fun setupNav()
    {
        // get nav host fragment, controller, and bottom nav view
        val navHostFragment = supportFragmentManager.findFragmentById(R.id.nav_host_fragment) as NavHostFragment//findNavController(R.id.nav_host_fragment)
        val navController = navHostFragment.navController
        val bottomNavView = findViewById<BottomNavigationView>(R.id.bottom)
        bottomNavView.setupWithNavController(navController)

        // Setting Up ActionBar with Navigation Controller
        val appBarConfiguration = AppBarConfiguration(
            topLevelDestinationIds = setOf (
                R.id.suspectsFragment,
                R.id.cluesFragment,
                R.id.evidenceFragment
            )
        )
        setupActionBarWithNavController(navController, appBarConfiguration)
    }

}