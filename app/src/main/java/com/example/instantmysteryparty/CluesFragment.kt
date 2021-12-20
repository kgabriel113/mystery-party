package com.example.instantmysteryparty

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import com.example.instantmysteryparty.databinding.FragmentCluesBinding
import androidx.fragment.app.viewModels
import androidx.recyclerview.widget.RecyclerView


class CluesFragment : Fragment() {

    private lateinit var binding: FragmentCluesBinding
    private val viewModel: CluesViewModel by viewModels()


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DataBindingUtil.inflate(inflater, R.layout.fragment_clues, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.cluesViewModel = viewModel
        binding.mySecretsRecycler.adapter = viewModel.mySecrets.value?.let { SecretsAdapter(it) }
        binding.othersSecretsRecycler.adapter = viewModel.otherSecrets.value?.let { SecretsAdapter(it) }
    }


}