package com.tiffinbox.backend.dto.response.mealmenumanagement;

import com.tiffinbox.backend.dto.MealResponseDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetMealListResponse extends BasicResponse {
    List<MealResponseDTO> mealResponseList;
}
