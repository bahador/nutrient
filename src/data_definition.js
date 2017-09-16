module.exports = [
	{
		name: 'ABBREV.txt',
		table: 'abbreviated',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'short_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'water',
				source: 'number',
				type: 'number'
			},
			{
				name: 'kcal',
				source: 'number',
				type: 'number'
			},
			{
				name: 'protein',
				source: 'number',
				type: 'number'
			},
			{
				name: 'total_fat',
				source: 'number',
				type: 'number'
			},
			{
				name: 'ash',
				source: 'number',
				type: 'number'
			},
			{
				name: 'cho',
				source: 'number',
				type: 'number'
			},
			{
				name: 'fiber',
				source: 'number',
				type: 'number'
			},
			{
				name: 'sugar',
				source: 'number',
				type: 'number'
			},
			{
				name: 'ca',
				source: 'number',
				type: 'number'
			},
			{
				name: 'fe',
				source: 'number',
				type: 'number'
			},
			{
				name: 'mg',
				source: 'number',
				type: 'number'
			},
			{
				name: 'p',
				source: 'number',
				type: 'number'
			},
			{
				name: 'k',
				source: 'number',
				type: 'number'
			},
			{
				name: 'na',
				source: 'number',
				type: 'number'
			},
			{
				name: 'zn',
				source: 'number',
				type: 'number'
			},
			{
				name: 'cu',
				source: 'number',
				type: 'number'
			},
			{
				name: 'mn',
				source: 'number',
				type: 'number'
			},
			{
				name: 'se',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_c',
				source: 'number',
				type: 'number'
			},
			{
				name: 'thiamin',
				source: 'number',
				type: 'number'
			},
			{
				name: 'riboflavin',
				source: 'number',
				type: 'number'
			},
			{
				name: 'niacin',
				source: 'number',
				type: 'number'
			},
			{
				name: 'pantothenic_acid',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_b6',
				source: 'number',
				type: 'number'
			},
			{
				name: 'folate',
				source: 'number',
				type: 'number'
			},
			{
				name: 'folic_acid',
				source: 'number',
				type: 'number'
			},
			{
				name: 'food_folate',
				source: 'number',
				type: 'number'
			},
			{
				name: 'folate_dfe',
				source: 'number',
				type: 'number'
			},
			{
				name: 'choline',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_b12',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_a_iu',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_a_rae',
				source: 'number',
				type: 'number'
			},
			{
				name: 'retinol',
				source: 'number',
				type: 'number'
			},
			{
				name: 'alpha_carotine',
				source: 'number',
				type: 'number'
			},
			{
				name: 'beta_carotine',
				source: 'number',
				type: 'number'
			},
			{
				name: 'beta_cryptoxanthin',
				source: 'number',
				type: 'number'
			},
			{
				name: 'lycopene',
				source: 'number',
				type: 'number'
			},
			{
				name: 'lutein_zeazanthin',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_e',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_d_mcg',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_d_iu',
				source: 'number',
				type: 'number'
			},
			{
				name: 'vitamin_k',
				source: 'number',
				type: 'number'
			},
			{
				name: 'saturated_fat',
				source: 'number',
				type: 'number'
			},
			{
				name: 'monounsaturated_fat',
				source: 'number',
				type: 'number'
			},
			{
				name: 'polyunsaturated_fat',
				source: 'number',
				type: 'number'
			},
			{
				name: 'cholesterol',
				source: 'number',
				type: 'number'
			},
			{
				name: 'first_weight',
				source: 'number',
				type: 'number'
			},
			{
				name: 'first_weight_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'second_weight',
				source: 'number',
				type: 'number'
			},
			{
				name: 'second_weight_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'refuse',
				source: 'number',
				type: 'number'
			}
		]
	},
	{
		name: 'DATA_SRC.txt',
		table: 'data_source',
		fields: [
			{
				name: 'data_source_id',
				source: 'text',
				type: 'text'
			},
			{
				name: 'authors',
				source: 'text',
				type: 'text'
			},
			{
				name: 'title',
				source: 'text',
				type: 'text'
			},
			{
				name: 'year',
				source: 'text',
				type: 'number'
			},
			{
				name: 'journal',
				source: 'text',
				type: 'text'
			},
			{
				name: 'volume_city',
				source: 'text',
				type: 'text'
			},
			{
				name: 'issue_state',
				source: 'text',
				type: 'text'
			},
			{
				name: 'start_page',
				source: 'text',
				type: 'number'
			},
			{
				name: 'end_page',
				source: 'text',
				type: 'number'
			}
		]
	},
	{
		name: 'DATSRCLN.txt',
		table: 'data_source_link',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'nutrient_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'data_source_id',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'DERIV_CD.txt',
		table: 'data_derivation_code_description',
		fields: [
			{
				name: 'derivation_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'description',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'FD_GROUP.txt',
		table: 'food_group',
		fields: [
			{
				name: 'food_group_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'description',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'FOOD_DES.txt',
		table: 'food_description',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'food_group_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'long_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'short_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'common_name',
				source: 'text',
				type: 'text'
			},
			{
				name: 'manufacturer',
				source: 'text',
				type: 'text'
			},
			{
				name: 'survey',
				source: 'text',
				type: 'boolean'
			},
			{
				name: 'refuse_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'refuse',
				source: 'number',
				type: 'number'
			},
			{
				name: 'scientific_name',
				source: 'text',
				type: 'text'
			},
			{
				name: 'n_factor',
				source: 'number',
				type: 'number'
			},
			{
				name: 'protein_factor',
				source: 'number',
				type: 'number'
			},
			{
				name: 'fat_factor',
				source: 'number',
				type: 'number'
			},
			{
				name: 'cho_factor',
				source: 'number',
				type: 'number'
			}
		]
	},
	{
		name: 'FOOTNOTE.txt',
		table: 'footnote',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'sequence_number',
				source: 'text',
				type: 'number'
			},
			{
				name: 'type',
				source: 'text',
				type: 'text'
			},
			{
				name: 'nutrient_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'text',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'LANGDESC.txt',
		table: 'langual_description',
		fields: [
			{
				name: 'factor_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'description',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'LANGUAL.txt',
		table: 'langual_factor',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'factor_code',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'NUT_DATA.txt',
		table: 'nutrient_data',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'nutrient_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'nutrient_value',
				source: 'number',
				type: 'number'
			},
			{
				name: 'nutrient_data_points',
				source: 'number',
				type: 'number'
			},
			{
				name: 'standard_error',
				source: 'number',
				type: 'number'
			},
			{
				name: 'source_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'derivation_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'reference_ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'fortified',
				source: 'text',
				type: 'boolean'
			},
			{
				name: 'studies',
				source: 'number',
				type: 'number'
			},
			{
				name: 'min_value',
				source: 'number',
				type: 'number'
			},
			{
				name: 'max_value',
				source: 'number',
				type: 'number'
			},
			{
				name: 'degrees_of_freedom',
				source: 'number',
				type: 'number'
			},
			{
				name: 'lower_error_bound',
				source: 'number',
				type: 'number'
			},
			{
				name: 'upper_error_bound',
				source: 'number',
				type: 'number'
			},
			{
				name: 'statistical_comments',
				source: 'text',
				type: 'text'
			},
			{
				name: 'add_modified_date',
				source: 'text',
				type: 'text'
			},
			{
				name: 'confidence_code',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'NUTR_DEF.txt',
		table: 'nutrient_definition',
		fields: [
			{
				name: 'nutrient_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'units',
				source: 'text',
				type: 'text'
			},
			{
				name: 'tagname',
				source: 'text',
				type: 'text'
			},
			{
				name: 'nutrient_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'precision',
				source: 'text',
				type: 'number'
			},
			{
				name: 'sr_order',
				source: 'text',
				type: 'number'
			}
		]
	},
	{
		name: 'SRC_CD.txt',
		table: 'source_code',
		fields: [
			{
				name: 'source_code',
				source: 'text',
				type: 'text'
			},
			{
				name: 'source_code_description',
				source: 'text',
				type: 'text'
			}
		]
	},
	{
		name: 'WEIGHT.txt',
		table: 'weight',
		fields: [
			{
				name: 'ndb_number',
				source: 'text',
				type: 'text'
			},
			{
				name: 'sequence_number',
				source: 'number',
				type: 'number'
			},
			{
				name: 'amount',
				source: 'number',
				type: 'number'
			},
			{
				name: 'measure_description',
				source: 'text',
				type: 'text'
			},
			{
				name: 'gram_weight',
				source: 'number',
				type: 'number'
			},
			{
				name: 'data_points',
				source: 'number',
				type: 'number'
			},
			{
				name: 'standard_deviation',
				source: 'number',
				type: 'number'
			}
		]
	}
];