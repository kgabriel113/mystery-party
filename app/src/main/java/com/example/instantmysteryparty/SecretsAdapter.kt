package com.example.instantmysteryparty

import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class SecretsAdapter(
    private val secretsList: List<String>
): RecyclerView.Adapter<SecretsAdapter.SecretsViewHolder>() {

    class SecretsViewHolder(view: View): RecyclerView.ViewHolder(view) {
        val textView: TextView = view.findViewById(R.id.secrets_text_view)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SecretsViewHolder {
        val adapterLayout = LayoutInflater.from(parent.context)
            .inflate(R.layout.secrets_list_item, parent, false)
        return SecretsViewHolder(adapterLayout)
    }

    override fun onBindViewHolder(holder: SecretsViewHolder, position: Int) {
        val item = secretsList[position]
        holder.textView.text = item
    }

    override fun getItemCount() = secretsList.size
}