import z from 'zod';
import {
  get_Maplestory_get_character_ability,
  get_Maplestory_get_character_android_equipment,
  get_Maplestory_get_character_basic,
  get_Maplestory_get_character_beauty_equipment,
  get_Maplestory_get_character_cashitem_equipment,
  get_Maplestory_get_character_dojang,
  get_Maplestory_get_character_hexamatrix,
  get_Maplestory_get_character_hexamatrix_stat,
  get_Maplestory_get_character_hyper_stat,
  get_Maplestory_get_character_id,
  get_Maplestory_get_character_item_equipment,
  get_Maplestory_get_character_link_skill,
  get_Maplestory_get_character_pet_equipment,
  get_Maplestory_get_character_popularity,
  get_Maplestory_get_character_propensity,
  get_Maplestory_get_character_set_effect,
  get_Maplestory_get_character_skill,
  get_Maplestory_get_character_stat,
  get_Maplestory_get_character_symbol_equipment,
  get_Maplestory_get_character_vmatrix,
} from './character.schema';
import { Fetcher } from './fetcher';
import { get_Maplestory_get_guild_basic, get_Maplestory_get_oguild_id } from './guild.schema';
import { get_Get_meta, get_Maplestory_get_cube_histories } from './probablity.schema';
import {
  get_Get_achv_ranking,
  get_Get_dojang_ranking,
  get_Get_guild_ranking,
  get_Get_overall_ranking,
  get_Get_theseed_ranking,
  get_Get_union_ranking,
} from './ranking.schema';
import { get_Maplestory_get_union, get_Maplestory_get_union_raider } from './union.schema';

export class Maplestory {
  fetcher: Fetcher;

  constructor({ api_key }: { api_key: string }) {
    this.fetcher = Fetcher.create({
      baseHeaders: {
        'x-nxopen-api-key': api_key,
      },
      baseUrl: 'https://open.api.nexon.com',
    });
  }

  /**
   * Character
   */
  getCharacter(
    searchParams: z.output<typeof get_Maplestory_get_character_id.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_id.response.parse,
      searchParams,
      url: get_Maplestory_get_character_id.path.value,
    });
  }

  getCharacterBasic(
    searchParams: z.output<typeof get_Maplestory_get_character_basic.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_basic.response.parse,
      searchParams,
      url: get_Maplestory_get_character_basic.path.value,
    });
  }

  getCharacterPopularity(
    searchParams: z.output<typeof get_Maplestory_get_character_popularity.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_popularity.response.parse,
      searchParams,
      url: get_Maplestory_get_character_popularity.path.value,
    });
  }

  getCharacterStat(
    searchParams: z.output<typeof get_Maplestory_get_character_stat.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_stat.response.parse,
      searchParams,
      url: get_Maplestory_get_character_stat.path.value,
    });
  }

  getCharacterHyperStat(
    searchParams: z.output<typeof get_Maplestory_get_character_hyper_stat.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_hyper_stat.response.parse,
      searchParams,
      url: get_Maplestory_get_character_hyper_stat.path.value,
    });
  }

  getCharacterPropensity(
    searchParams: z.output<typeof get_Maplestory_get_character_propensity.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_propensity.response.parse,
      searchParams,
      url: get_Maplestory_get_character_propensity.path.value,
    });
  }

  getCharacterAbility(
    searchParams: z.output<typeof get_Maplestory_get_character_ability.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_ability.response.parse,
      searchParams,
      url: get_Maplestory_get_character_ability.path.value,
    });
  }

  getCharacterItemEquipment(
    searchParams: z.output<
      typeof get_Maplestory_get_character_item_equipment.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_item_equipment.response.parse,
      searchParams,
      url: get_Maplestory_get_character_item_equipment.path.value,
    });
  }

  getCharacterCashItemEquipment(
    searchParams: z.output<
      typeof get_Maplestory_get_character_cashitem_equipment.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_cashitem_equipment.response.parse,
      searchParams,
      url: get_Maplestory_get_character_cashitem_equipment.path.value,
    });
  }

  getCharacterSymbolEquipment(
    searchParams: z.output<
      typeof get_Maplestory_get_character_symbol_equipment.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_symbol_equipment.response.parse,
      searchParams,
      url: get_Maplestory_get_character_symbol_equipment.path.value,
    });
  }

  getCharacterSetEffect(
    searchParams: z.output<typeof get_Maplestory_get_character_set_effect.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_set_effect.response.parse,
      searchParams,
      url: get_Maplestory_get_character_set_effect.path.value,
    });
  }

  getCharacterBeautyEquipment(
    searchParams: z.output<
      typeof get_Maplestory_get_character_beauty_equipment.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_beauty_equipment.response.parse,
      searchParams,
      url: get_Maplestory_get_character_beauty_equipment.path.value,
    });
  }

  getCharacterAndroidEquipment(
    searchParams: z.output<
      typeof get_Maplestory_get_character_android_equipment.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_android_equipment.response.parse,
      searchParams,
      url: get_Maplestory_get_character_android_equipment.path.value,
    });
  }

  getCharacterPetEquipment(
    searchParams: z.output<
      typeof get_Maplestory_get_character_pet_equipment.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_pet_equipment.response.parse,
      searchParams,
      url: get_Maplestory_get_character_pet_equipment.path.value,
    });
  }

  getCharacterSkill(
    searchParams: z.output<typeof get_Maplestory_get_character_skill.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_skill.response.parse,
      searchParams,
      url: get_Maplestory_get_character_skill.path.value,
    });
  }

  getCharacterLinkSkill(
    searchParams: z.output<typeof get_Maplestory_get_character_link_skill.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_link_skill.response.parse,
      searchParams,
      url: get_Maplestory_get_character_link_skill.path.value,
    });
  }

  getCharacterVMatrix(
    searchParams: z.output<typeof get_Maplestory_get_character_vmatrix.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_vmatrix.response.parse,
      searchParams,
      url: get_Maplestory_get_character_vmatrix.path.value,
    });
  }

  getCharacterHexaMatrix(
    searchParams: z.output<typeof get_Maplestory_get_character_hexamatrix.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_hexamatrix.response.parse,
      searchParams,
      url: get_Maplestory_get_character_hexamatrix.path.value,
    });
  }

  getCharacterHexaMatrixStat(
    searchParams: z.output<
      typeof get_Maplestory_get_character_hexamatrix_stat.parameters.shape.query
    >,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_hexamatrix_stat.response.parse,
      searchParams,
      url: get_Maplestory_get_character_hexamatrix_stat.path.value,
    });
  }

  getCharacterDojang(
    searchParams: z.output<typeof get_Maplestory_get_character_dojang.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_character_dojang.response.parse,
      searchParams,
      url: get_Maplestory_get_character_dojang.path.value,
    });
  }

  /**
   * Union
   */
  getUnion(searchParams: z.output<typeof get_Maplestory_get_union.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Maplestory_get_union.response.parse,
      searchParams,
      url: get_Maplestory_get_union.path.value,
    });
  }

  getUnionRaider(
    searchParams: z.output<typeof get_Maplestory_get_union_raider.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_union_raider.response.parse,
      searchParams,
      url: get_Maplestory_get_union_raider.path.value,
    });
  }

  /**
   * Guild
   */
  getGuildId(searchParams: z.output<typeof get_Maplestory_get_oguild_id.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Maplestory_get_oguild_id.response.parse,
      searchParams,
      url: get_Maplestory_get_oguild_id.path.value,
    });
  }

  getGuildBasic(
    searchParams: z.output<typeof get_Maplestory_get_guild_basic.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_guild_basic.response.parse,
      searchParams,
      url: get_Maplestory_get_guild_basic.path.value,
    });
  }

  /**
   * Starforce
   */
  getStarforceHistories(searchParams: z.output<typeof get_Get_meta.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Get_meta.response.parse,
      searchParams,
      url: get_Get_meta.path.value,
    });
  }

  /**
   * Cube
   */
  getCubeHistories(
    searchParams: z.output<typeof get_Maplestory_get_cube_histories.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Maplestory_get_cube_histories.response.parse,
      searchParams,
      url: get_Maplestory_get_cube_histories.path.value,
    });
  }

  /**
   * Ranking
   */
  getOverallRanking(searchParams: z.output<typeof get_Get_overall_ranking.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Get_overall_ranking.response.parse,
      searchParams,
      url: get_Get_overall_ranking.path.value,
    });
  }

  getUnionRanking(searchParams: z.output<typeof get_Get_union_ranking.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Get_union_ranking.response.parse,
      searchParams,
      url: get_Get_union_ranking.path.value,
    });
  }

  getGuildRanking(searchParams: z.output<typeof get_Get_guild_ranking.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Get_guild_ranking.response.parse,
      searchParams,
      url: get_Get_guild_ranking.path.value,
    });
  }

  getDojangRanking(searchParams: z.output<typeof get_Get_dojang_ranking.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Get_dojang_ranking.response.parse,
      searchParams,
      url: get_Get_dojang_ranking.path.value,
    });
  }

  getTheseedRanking(searchParams: z.output<typeof get_Get_theseed_ranking.parameters.shape.query>) {
    return this.fetcher.get({
      parser: get_Get_theseed_ranking.response.parse,
      searchParams,
      url: get_Get_theseed_ranking.path.value,
    });
  }

  getAchievementRanking(
    searchParams: z.output<typeof get_Get_achv_ranking.parameters.shape.query>,
  ) {
    return this.fetcher.get({
      parser: get_Get_achv_ranking.response.parse,
      searchParams,
      url: get_Get_achv_ranking.path.value,
    });
  }
}
