package com.example.instantmysteryparty

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class CluesViewModel: ViewModel() {

    private val _mySecrets = MutableLiveData<List<String>>(listOf("my secret 1", "my secret 2"))
    private val _otherSecrets = MutableLiveData<List<String>>(listOf("his secret 1", "her secret 2", "their secret 3"))

    val mySecrets: LiveData<List<String>> get() = _mySecrets
    val otherSecrets: LiveData<List<String>> get() = _otherSecrets

}