import z from 'zod';

export type Character = z.infer<typeof Character>;
export const Character = z.object({
  ocid: z.string().optional(),
});

export type CharacterBasic = z.infer<typeof CharacterBasic>;
export const CharacterBasic = z.object({
  date: z.string().optional(),
  character_name: z.string().optional(),
  world_name: z.string().optional(),
  character_gender: z.string().optional(),
  character_class: z.string().optional(),
  character_class_level: z.string().optional(),
  character_level: z.number().optional(),
  character_exp: z.number().optional(),
  character_exp_rate: z.string().optional(),
  character_guild_name: z.string().optional(),
  character_image: z.string().optional(),
});

export type CharacterPopularity = z.infer<typeof CharacterPopularity>;
export const CharacterPopularity = z.object({
  date: z.string().optional(),
  popularity: z.number().optional(),
});

export type CharacterStat = z.infer<typeof CharacterStat>;
export const CharacterStat = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  final_stat: z
    .array(
      z.object({
        stat_name: z.string().optional(),
        stat_value: z.string().optional(),
      }),
    )
    .optional(),
  remain_ap: z.number().optional(),
});

export type CharacterHyperStat = z.infer<typeof CharacterHyperStat>;
export const CharacterHyperStat = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  use_preset_no: z.string().optional(),
  use_available_hyper_stat: z.number().optional(),
  hyper_stat_preset_1: z
    .array(
      z.object({
        stat_type: z.string().optional(),
        stat_point: z.number().optional(),
        stat_level: z.number().optional(),
        stat_increase: z.string().optional(),
      }),
    )
    .optional(),
  hyper_stat_preset_1_remain_point: z.number().optional(),
  hyper_stat_preset_2: z
    .array(
      z.object({
        stat_type: z.string().optional(),
        stat_point: z.number().optional(),
        stat_level: z.number().optional(),
        stat_increase: z.string().optional(),
      }),
    )
    .optional(),
  hyper_stat_preset_2_remain_point: z.number().optional(),
  hyper_stat_preset_3: z
    .array(
      z.object({
        stat_type: z.string().optional(),
        stat_point: z.number().optional(),
        stat_level: z.number().optional(),
        stat_increase: z.string().optional(),
      }),
    )
    .optional(),
  hyper_stat_preset_3_remain_point: z.number().optional(),
});

export type CharacterPropensity = z.infer<typeof CharacterPropensity>;
export const CharacterPropensity = z.object({
  date: z.string().optional(),
  charisma_level: z.number().optional(),
  sensibility_level: z.number().optional(),
  insight_level: z.number().optional(),
  willingness_level: z.number().optional(),
  handicraft_level: z.number().optional(),
  charm_level: z.number().optional(),
});

export type CharacterAbility = z.infer<typeof CharacterAbility>;
export const CharacterAbility = z.object({
  date: z.string().optional(),
  ability_grade: z.string().optional(),
  ability_info: z
    .array(
      z.object({
        ability_no: z.string().optional(),
        ability_grade: z.string().optional(),
        ability_value: z.string().optional(),
      }),
    )
    .optional(),
  remain_fame: z.number().optional(),
});

export type CharacterItemEquipment = z.infer<typeof CharacterItemEquipment>;
export const CharacterItemEquipment = z.object({
  date: z.string().optional(),
  character_gender: z.string().optional(),
  character_class: z.string().optional(),
  item_equipment: z
    .array(
      z.object({
        item_equipment_part: z.string().optional(),
        equipment_slot: z.string().optional(),
        item_name: z.string().optional(),
        item_icon: z.string().optional(),
        item_description: z.string().optional(),
        item_shape_name: z.string().optional(),
        item_shape_icon: z.string().optional(),
        gender: z.string().optional(),
        item_total_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            ignore_monster_armor: z.string().optional(),
            all_stat: z.string().optional(),
            damage: z.string().optional(),
            equipment_level_decrease: z.number().optional(),
            max_hp_rate: z.string().optional(),
            max_mp_rate: z.string().optional(),
          })
          .optional(),
        item_base_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            ignore_monster_armor: z.string().optional(),
            all_stat: z.string().optional(),
            max_hp_rate: z.string().optional(),
            max_mp_rate: z.string().optional(),
            base_equipment_level: z.number().optional(),
          })
          .optional(),
        potential_option_grade: z.string().optional(),
        additional_potential_option_grade: z.string().optional(),
        potential_option_1: z.string().optional(),
        potential_option_2: z.string().optional(),
        potential_option_3: z.string().optional(),
        additional_potential_option_1: z.string().optional(),
        additional_potential_option_2: z.string().optional(),
        additional_potential_option_3: z.string().optional(),
        equipment_level_increase: z.number().optional(),
        item_exceptional_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
          })
          .optional(),
        item_add_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            damage: z.string().optional(),
            all_stat: z.string().optional(),
            equipment_level_decrease: z.number().optional(),
          })
          .optional(),
        growth_exp: z.number().optional(),
        growth_level: z.number().optional(),
        scroll_upgrade: z.string().optional(),
        cuttable_count: z.string().optional(),
        golden_hammer_flag: z.string().optional(),
        scroll_resilience_count: z.string().optional(),
        scroll_upgradeable_count: z.string().optional(),
        soul_name: z.string().optional(),
        soul_option: z.string().optional(),
        item_etc_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
          })
          .optional(),
        starforce: z.string().optional(),
        starforce_scroll_flag: z.string().optional(),
        item_starforce_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
          })
          .optional(),
        special_ring_level: z.number().optional(),
        date_expire: z.string().optional(),
      }),
    )
    .optional(),
  title: z
    .object({
      title_name: z.string().optional(),
      title_icon: z.string().optional(),
      title_description: z.string().optional(),
      date_expire: z.string().optional(),
      date_option_expire: z.string().optional(),
    })
    .optional(),
  dragon_equipment: z
    .array(
      z.object({
        item_equipment_part: z.string().optional(),
        equipment_slot: z.string().optional(),
        item_name: z.string().optional(),
        item_icon: z.string().optional(),
        item_description: z.string().optional(),
        item_shape_name: z.string().optional(),
        item_shape_icon: z.string().optional(),
        gender: z.string().optional(),
        item_total_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            ignore_monster_armor: z.string().optional(),
            all_stat: z.string().optional(),
            damage: z.string().optional(),
            equipment_level_decrease: z.number().optional(),
            max_hp_rate: z.string().optional(),
            max_mp_rate: z.string().optional(),
          })
          .optional(),
        item_base_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            ignore_monster_armor: z.string().optional(),
            all_stat: z.string().optional(),
            max_hp_rate: z.string().optional(),
            max_mp_rate: z.string().optional(),
            base_equipment_level: z.number().optional(),
          })
          .optional(),
        equipment_level_increase: z.number().optional(),
        item_exceptional_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
          })
          .optional(),
        item_add_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            damage: z.string().optional(),
            all_stat: z.string().optional(),
            equipment_level_decrease: z.number().optional(),
          })
          .optional(),
        growth_exp: z.number().optional(),
        growth_level: z.number().optional(),
        scroll_upgrade: z.string().optional(),
        cuttable_count: z.string().optional(),
        golden_hammer_flag: z.string().optional(),
        scroll_resilience_count: z.string().optional(),
        scroll_upgradeable_count: z.string().optional(),
        soul_name: z.string().optional(),
        soul_option: z.string().optional(),
        item_etc_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
          })
          .optional(),
        starforce: z.string().optional(),
        starforce_scroll_flag: z.string().optional(),
        item_starforce_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
          })
          .optional(),
        special_ring_level: z.number().optional(),
        date_expire: z.string().optional(),
      }),
    )
    .optional(),
  mechanic_equipment: z
    .array(
      z.object({
        item_equipment_part: z.string().optional(),
        equipment_slot: z.string().optional(),
        item_name: z.string().optional(),
        item_icon: z.string().optional(),
        item_description: z.string().optional(),
        item_shape_name: z.string().optional(),
        item_shape_icon: z.string().optional(),
        gender: z.string().optional(),
        item_total_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            ignore_monster_armor: z.string().optional(),
            all_stat: z.string().optional(),
            damage: z.string().optional(),
            equipment_level_decrease: z.number().optional(),
            max_hp_rate: z.string().optional(),
            max_mp_rate: z.string().optional(),
          })
          .optional(),
        item_base_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            ignore_monster_armor: z.string().optional(),
            all_stat: z.string().optional(),
            max_hp_rate: z.string().optional(),
            max_mp_rate: z.string().optional(),
            base_equipment_level: z.number().optional(),
          })
          .optional(),
        equipment_level_increase: z.number().optional(),
        item_exceptional_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
          })
          .optional(),
        item_add_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
            boss_damage: z.string().optional(),
            damage: z.string().optional(),
            all_stat: z.string().optional(),
            equipment_level_decrease: z.number().optional(),
          })
          .optional(),
        growth_exp: z.number().optional(),
        growth_level: z.number().optional(),
        scroll_upgrade: z.string().optional(),
        cuttable_count: z.string().optional(),
        golden_hammer_flag: z.string().optional(),
        scroll_resilience_count: z.string().optional(),
        scroll_upgradeable_count: z.string().optional(),
        soul_name: z.string().optional(),
        soul_option: z.string().optional(),
        item_etc_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
          })
          .optional(),
        starforce: z.string().optional(),
        starforce_scroll_flag: z.string().optional(),
        item_starforce_option: z
          .object({
            str: z.string().optional(),
            dex: z.string().optional(),
            int: z.string().optional(),
            luk: z.string().optional(),
            max_hp: z.string().optional(),
            max_mp: z.string().optional(),
            attack_power: z.string().optional(),
            magic_power: z.string().optional(),
            armor: z.string().optional(),
            speed: z.string().optional(),
            jump: z.string().optional(),
          })
          .optional(),
        special_ring_level: z.number().optional(),
        date_expire: z.string().optional(),
      }),
    )
    .optional(),
});

export type CharacterCashItemEquipment = z.infer<typeof CharacterCashItemEquipment>;
export const CharacterCashItemEquipment = z.object({
  date: z.string().optional(),
  character_gender: z.string().optional(),
  character_class: z.string().optional(),
  preset_no: z.number().optional(),
  cash_item_equipment_preset_1: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
        base_preset_item_disable_flag: z.string().optional(),
      }),
    )
    .optional(),
  cash_item_equipment_preset_2: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
        base_preset_item_disable_flag: z.string().optional(),
      }),
    )
    .optional(),
  cash_item_equipment_preset_3: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
        base_preset_item_disable_flag: z.string().optional(),
      }),
    )
    .optional(),
  additional_cash_item_equipment_preset_1: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
        base_preset_item_disable_flag: z.string().optional(),
      }),
    )
    .optional(),
  additional_cash_item_equipment_preset_2: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
        base_preset_item_disable_flag: z.string().optional(),
      }),
    )
    .optional(),
  additional_cash_item_equipment_preset_3: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
        base_preset_item_disable_flag: z.string().optional(),
      }),
    )
    .optional(),
});

export type CharacterSymbolEquipment = z.infer<typeof CharacterSymbolEquipment>;
export const CharacterSymbolEquipment = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  symbol: z
    .array(
      z.object({
        symbol_name: z.string().optional(),
        symbol_icon: z.string().optional(),
        symbol_description: z.string().optional(),
        symbol_force: z.string().optional(),
        symbol_level: z.number().optional(),
        symbol_str: z.string().optional(),
        symbol_dex: z.string().optional(),
        symbol_int: z.string().optional(),
        symbol_luk: z.string().optional(),
        symbol_hp: z.string().optional(),
        symbol_growth_count: z.number().optional(),
        symbol_require_growth_count: z.number().optional(),
      }),
    )
    .optional(),
});

export type CharacterSetEffect = z.infer<typeof CharacterSetEffect>;
export const CharacterSetEffect = z.object({
  date: z.string().optional(),
  set_effect: z
    .array(
      z.object({
        set_name: z.string().optional(),
        total_set_count: z.number().optional(),
        set_effect_info: z
          .array(
            z.object({
              set_count: z.number().optional(),
              set_option: z.string().optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
});

export type CharacterBeautyEquipment = z.infer<typeof CharacterBeautyEquipment>;
export const CharacterBeautyEquipment = z.object({
  date: z.string().optional(),
  character_gender: z.string().optional(),
  character_class: z.string().optional(),
  character_hair: z
    .object({
      hair_name: z.string().optional(),
      base_color: z.string().optional(),
      mix_color: z.string().optional(),
      mix_rate: z.string().optional(),
    })
    .optional(),
  character_face: z
    .object({
      face_name: z.string().optional(),
      base_color: z.string().optional(),
      mix_color: z.string().optional(),
      mix_rate: z.string().optional(),
    })
    .optional(),
  character_skin_name: z.string().optional(),
  additional_character_hair: z
    .object({
      hair_name: z.string().optional(),
      base_color: z.string().optional(),
      mix_color: z.string().optional(),
      mix_rate: z.string().optional(),
    })
    .optional(),
  additional_character_face: z
    .object({
      face_name: z.string().optional(),
      base_color: z.string().optional(),
      mix_color: z.string().optional(),
      mix_rate: z.string().optional(),
    })
    .optional(),
  additional_character_skin_name: z.string().optional(),
});

export type CharacterAndroidEquipment = z.infer<typeof CharacterAndroidEquipment>;
export const CharacterAndroidEquipment = z.object({
  date: z.string().optional(),
  android_name: z.string().optional(),
  android_nickname: z.string().optional(),
  android_icon: z.string().optional(),
  android_description: z.string().optional(),
  android_hair: z
    .object({
      hair_name: z.string().optional(),
      base_color: z.string().optional(),
      mix_color: z.string().optional(),
      mix_rate: z.string().optional(),
    })
    .optional(),
  android_face: z
    .object({
      face_name: z.string().optional(),
      base_color: z.string().optional(),
      mix_color: z.string().optional(),
      mix_rate: z.string().optional(),
    })
    .optional(),
  android_skin_name: z.string().optional(),
  android_cash_item_equipment: z
    .array(
      z.object({
        cash_item_equipment_part: z.string().optional(),
        cash_item_equipment_slot: z.string().optional(),
        cash_item_name: z.string().optional(),
        cash_item_icon: z.string().optional(),
        cash_item_description: z.string().optional(),
        cash_item_option: z
          .array(
            z.object({
              option_type: z.string().optional(),
              option_value: z.string().optional(),
            }),
          )
          .optional(),
        date_expire: z.string().optional(),
        date_option_expire: z.string().optional(),
        cash_item_label: z.string().optional(),
        cash_item_coloring_prism: z
          .object({
            color_range: z.string().optional(),
            hue: z.number().optional(),
            saturation: z.number().optional(),
            value: z.number().optional(),
          })
          .optional(),
      }),
    )
    .optional(),
  android_ear_sensor_clip_flag: z.string().optional(),
});

export type CharacterPetEquipment = z.infer<typeof CharacterPetEquipment>;
export const CharacterPetEquipment = z.object({
  date: z.string().optional(),
  pet_1_name: z.string().optional(),
  pet_1_nickname: z.string().optional(),
  pet_1_icon: z.string().optional(),
  pet_1_description: z.string().optional(),
  pet_1_equipment: z
    .object({
      item_name: z.string().optional(),
      item_icon: z.string().optional(),
      item_description: z.string().optional(),
      item_option: z
        .array(
          z.object({
            option_type: z.string().optional(),
            option_value: z.string().optional(),
          }),
        )
        .optional(),
      scroll_upgrade: z.number().optional(),
      scroll_upgradeable: z.number().optional(),
    })
    .optional(),
  pet_1_auto_skill: z
    .object({
      skill_1: z.string().optional(),
      skill_1_icon: z.string().optional(),
      skill_2: z.string().optional(),
      skill_2_icon: z.string().optional(),
    })
    .optional(),
  pet_1_pet_type: z.string().optional(),
  pet_1_skill: z.array(z.string()).optional(),
  pet_1_date_expire: z.string().optional(),
  pet_2_name: z.string().optional(),
  pet_2_nickname: z.string().optional(),
  pet_2_icon: z.string().optional(),
  pet_2_description: z.string().optional(),
  pet_2_equipment: z
    .object({
      item_name: z.string().optional(),
      item_icon: z.string().optional(),
      item_description: z.string().optional(),
      item_option: z
        .array(
          z.object({
            option_type: z.string().optional(),
            option_value: z.string().optional(),
          }),
        )
        .optional(),
      scroll_upgrade: z.number().optional(),
      scroll_upgradeable: z.number().optional(),
    })
    .optional(),
  pet_2_auto_skill: z
    .object({
      skill_1: z.string().optional(),
      skill_1_icon: z.string().optional(),
      skill_2: z.string().optional(),
      skill_2_icon: z.string().optional(),
    })
    .optional(),
  pet_2_pet_type: z.string().optional(),
  pet_2_skill: z.array(z.string()).optional(),
  pet_2_date_expire: z.string().optional(),
  pet_3_name: z.string().optional(),
  pet_3_nickname: z.string().optional(),
  pet_3_icon: z.string().optional(),
  pet_3_description: z.string().optional(),
  pet_3_equipment: z
    .object({
      item_name: z.string().optional(),
      item_icon: z.string().optional(),
      item_description: z.string().optional(),
      item_option: z
        .array(
          z.object({
            option_type: z.string().optional(),
            option_value: z.string().optional(),
          }),
        )
        .optional(),
      scroll_upgrade: z.number().optional(),
      scroll_upgradeable: z.number().optional(),
    })
    .optional(),
  pet_3_auto_skill: z
    .object({
      skill_1: z.string().optional(),
      skill_1_icon: z.string().optional(),
      skill_2: z.string().optional(),
      skill_2_icon: z.string().optional(),
    })
    .optional(),
  pet_3_pet_type: z.string().optional(),
  pet_3_skill: z.array(z.string()).optional(),
  pet_3_date_expire: z.string().optional(),
});

export type CharacterSkill = z.infer<typeof CharacterSkill>;
export const CharacterSkill = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  character_skill_grade: z.string().optional(),
  character_skill: z
    .array(
      z.object({
        skill_name: z.string().optional(),
        skill_description: z.string().optional(),
        skill_level: z.number().optional(),
        skill_effect: z.string().optional(),
        skill_icon: z.string().optional(),
      }),
    )
    .optional(),
});

export type CharacterLinkSkill = z.infer<typeof CharacterLinkSkill>;
export const CharacterLinkSkill = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  character_link_skill: z
    .object({
      skill_name: z.string().optional(),
      skill_description: z.string().optional(),
      skill_level: z.number().optional(),
      skill_effect: z.string().optional(),
      skill_icon: z.string().optional(),
    })
    .optional(),
  character_owned_link_skill: z
    .object({
      skill_name: z.string().optional(),
      skill_description: z.string().optional(),
      skill_level: z.number().optional(),
      skill_effect: z.string().optional(),
      skill_icon: z.string().optional(),
    })
    .optional(),
});

export type CharacterVMatrix = z.infer<typeof CharacterVMatrix>;
export const CharacterVMatrix = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  character_v_core_equipment: z
    .array(
      z.object({
        slot_id: z.string().optional(),
        slot_level: z.number().optional(),
        v_core_name: z.string().optional(),
        v_core_type: z.string().optional(),
        v_core_level: z.number().optional(),
        v_core_skill_1: z.string().optional(),
        v_core_skill_2: z.string().optional(),
        v_core_skill_3: z.string().optional(),
      }),
    )
    .optional(),
  character_v_matrix_remain_slot_upgrade_point: z.number().optional(),
});

export type CharacterHexaMatrix = z.infer<typeof CharacterHexaMatrix>;
export const CharacterHexaMatrix = z.object({
  date: z.string().optional(),
  character_hexa_core_equipment: z
    .array(
      z.object({
        hexa_core_name: z.string().optional(),
        hexa_core_level: z.number().optional(),
        hexa_core_type: z.string().optional(),
        linked_skill: z
          .array(
            z.object({
              hexa_skill_id: z.string().optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
});

export type CharacterHexaMatrixStat = z.infer<typeof CharacterHexaMatrixStat>;
export const CharacterHexaMatrixStat = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  character_hexa_stat_core: z
    .array(
      z.object({
        slot_id: z.string().optional(),
        main_stat_name: z.string().optional(),
        sub_stat_name_1: z.string().optional(),
        sub_stat_name_2: z.string().optional(),
        main_stat_level: z.number().optional(),
        sub_stat_level_1: z.number().optional(),
        sub_stat_level_2: z.number().optional(),
        stat_grade: z.number().optional(),
      }),
    )
    .optional(),
  preset_hexa_stat_core: z
    .array(
      z.object({
        slot_id: z.string().optional(),
        main_stat_name: z.string().optional(),
        sub_stat_name_1: z.string().optional(),
        sub_stat_name_2: z.string().optional(),
        main_stat_level: z.number().optional(),
        sub_stat_level_1: z.number().optional(),
        sub_stat_level_2: z.number().optional(),
        stat_grade: z.number().optional(),
      }),
    )
    .optional(),
});

export type CharacterDojang = z.infer<typeof CharacterDojang>;
export const CharacterDojang = z.object({
  date: z.string().optional(),
  character_class: z.string().optional(),
  world_name: z.string().optional(),
  dojang_best_floor: z.number().optional(),
  date_dojang_record: z.string().optional(),
  dojang_best_time: z.number().optional(),
});

export type ErrorMessage = z.infer<typeof ErrorMessage>;
export const ErrorMessage = z.object({
  error: z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .optional(),
});

export type get_Maplestory_get_character_id = typeof get_Maplestory_get_character_id;
export const get_Maplestory_get_character_id = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/id'),
  parameters: z.object({
    query: z.object({
      character_name: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: Character,
};

export type get_Maplestory_get_character_basic = typeof get_Maplestory_get_character_basic;
export const get_Maplestory_get_character_basic = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/basic'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterBasic,
};

export type get_Maplestory_get_character_popularity =
  typeof get_Maplestory_get_character_popularity;
export const get_Maplestory_get_character_popularity = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/popularity'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterPopularity,
};

export type get_Maplestory_get_character_stat = typeof get_Maplestory_get_character_stat;
export const get_Maplestory_get_character_stat = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/stat'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterStat,
};

export type get_Maplestory_get_character_hyper_stat =
  typeof get_Maplestory_get_character_hyper_stat;
export const get_Maplestory_get_character_hyper_stat = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/hyper-stat'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterHyperStat,
};

export type get_Maplestory_get_character_propensity =
  typeof get_Maplestory_get_character_propensity;
export const get_Maplestory_get_character_propensity = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/propensity'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterPropensity,
};

export type get_Maplestory_get_character_ability = typeof get_Maplestory_get_character_ability;
export const get_Maplestory_get_character_ability = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/ability'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterAbility,
};

export type get_Maplestory_get_character_item_equipment =
  typeof get_Maplestory_get_character_item_equipment;
export const get_Maplestory_get_character_item_equipment = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/item-equipment'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterItemEquipment,
};

export type get_Maplestory_get_character_cashitem_equipment =
  typeof get_Maplestory_get_character_cashitem_equipment;
export const get_Maplestory_get_character_cashitem_equipment = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/cashitem-equipment'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterCashItemEquipment,
};

export type get_Maplestory_get_character_symbol_equipment =
  typeof get_Maplestory_get_character_symbol_equipment;
export const get_Maplestory_get_character_symbol_equipment = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/symbol-equipment'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterSymbolEquipment,
};

export type get_Maplestory_get_character_set_effect =
  typeof get_Maplestory_get_character_set_effect;
export const get_Maplestory_get_character_set_effect = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/set-effect'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterSetEffect,
};

export type get_Maplestory_get_character_beauty_equipment =
  typeof get_Maplestory_get_character_beauty_equipment;
export const get_Maplestory_get_character_beauty_equipment = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/beauty-equipment'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterBeautyEquipment,
};

export type get_Maplestory_get_character_android_equipment =
  typeof get_Maplestory_get_character_android_equipment;
export const get_Maplestory_get_character_android_equipment = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/android-equipment'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterAndroidEquipment,
};

export type get_Maplestory_get_character_pet_equipment =
  typeof get_Maplestory_get_character_pet_equipment;
export const get_Maplestory_get_character_pet_equipment = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/pet-equipment'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterPetEquipment,
};

export type get_Maplestory_get_character_skill = typeof get_Maplestory_get_character_skill;
export const get_Maplestory_get_character_skill = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/skill'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
      character_skill_grade: z.union([
        z.literal('0'),
        z.literal('1'),
        z.literal('1.5'),
        z.literal('2'),
        z.literal('2.5'),
        z.literal('3'),
        z.literal('4'),
        z.literal('hyperpassive'),
        z.literal('hyperactive'),
        z.literal('5'),
        z.literal('6'),
      ]),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterSkill,
};

export type get_Maplestory_get_character_link_skill =
  typeof get_Maplestory_get_character_link_skill;
export const get_Maplestory_get_character_link_skill = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/link-skill'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterLinkSkill,
};

export type get_Maplestory_get_character_vmatrix = typeof get_Maplestory_get_character_vmatrix;
export const get_Maplestory_get_character_vmatrix = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/vmatrix'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterVMatrix,
};

export type get_Maplestory_get_character_hexamatrix =
  typeof get_Maplestory_get_character_hexamatrix;
export const get_Maplestory_get_character_hexamatrix = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/hexamatrix'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterHexaMatrix,
};

export type get_Maplestory_get_character_hexamatrix_stat =
  typeof get_Maplestory_get_character_hexamatrix_stat;
export const get_Maplestory_get_character_hexamatrix_stat = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/hexamatrix-stat'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterHexaMatrixStat,
};

export type get_Maplestory_get_character_dojang = typeof get_Maplestory_get_character_dojang;
export const get_Maplestory_get_character_dojang = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/character/dojang'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CharacterDojang,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    '/maplestory/v1/id': get_Maplestory_get_character_id,
    '/maplestory/v1/character/basic': get_Maplestory_get_character_basic,
    '/maplestory/v1/character/popularity': get_Maplestory_get_character_popularity,
    '/maplestory/v1/character/stat': get_Maplestory_get_character_stat,
    '/maplestory/v1/character/hyper-stat': get_Maplestory_get_character_hyper_stat,
    '/maplestory/v1/character/propensity': get_Maplestory_get_character_propensity,
    '/maplestory/v1/character/ability': get_Maplestory_get_character_ability,
    '/maplestory/v1/character/item-equipment': get_Maplestory_get_character_item_equipment,
    '/maplestory/v1/character/cashitem-equipment': get_Maplestory_get_character_cashitem_equipment,
    '/maplestory/v1/character/symbol-equipment': get_Maplestory_get_character_symbol_equipment,
    '/maplestory/v1/character/set-effect': get_Maplestory_get_character_set_effect,
    '/maplestory/v1/character/beauty-equipment': get_Maplestory_get_character_beauty_equipment,
    '/maplestory/v1/character/android-equipment': get_Maplestory_get_character_android_equipment,
    '/maplestory/v1/character/pet-equipment': get_Maplestory_get_character_pet_equipment,
    '/maplestory/v1/character/skill': get_Maplestory_get_character_skill,
    '/maplestory/v1/character/link-skill': get_Maplestory_get_character_link_skill,
    '/maplestory/v1/character/vmatrix': get_Maplestory_get_character_vmatrix,
    '/maplestory/v1/character/hexamatrix': get_Maplestory_get_character_hexamatrix,
    '/maplestory/v1/character/hexamatrix-stat': get_Maplestory_get_character_hexamatrix_stat,
    '/maplestory/v1/character/dojang': get_Maplestory_get_character_dojang,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod['get'];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = 'post' | 'put' | 'patch' | 'delete';
export type Method = 'get' | 'head' | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig['parameters'];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig['response'];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint['response']>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl = '';

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('get', this.baseUrl + path, params[0]) as Promise<
      z.infer<TEndpoint['response']>
    >;
  }
  // </ApiClient.get>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? '');
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
