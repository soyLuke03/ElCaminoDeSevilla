
export interface Personaje {
    nombre: string,
    clase: string | undefined,
    nivel: number,
    exp: number,
    expSubirLvl: number,
    vidaMax: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number,
    inventario: Objeto[]
}

export interface Clase {
    nombre: string,
    vidaMax: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number,
    inventario: Objeto[]
}

export interface Enemigo {
    nombre: string,
    nivel: number,
    exp: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number
}

export interface MiniBoss {
    nombre: string,
    nivel: number,
    exp: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number
}

export interface Boss {
    nombre: string,
    nivel: number,
    exp: number,
    vida: number,
    armadura: number,
    dmgAtaque: number,
    probCrit: number,
    dmgCritico: number,
    precision: number,
    agilidad: number
}

export interface Estadisticas {
    vidaMax: number
    dmg: number,
    armadura: number,
    precision: number,
    agilidad: number,
    dmgCritico: number,
    probabilidadCritica: number
}

export interface Objeto {
    nombre: string
    tipo: TIPO_OBJETO | undefined
    estadisticas: Estadisticas
}

export enum TIPO_OBJETO {
    ESPADA = "ESPADA", ESPADA_A_DOS_MANOS = "ESPADA_A_DOS_MANOS",
    ARCO = "ARCO", BALLESTA = "BALLESTA", TIRACHINAS = "TIRACHINAS",
    DAGA ="DAGA", CUCHILLO = "CUCHILLO", 
    MAZA = "MAZA", MAZA_A_DOS_MANOS = "MAZA_A_DOS_MANOS",
    BACULO = "BACULO", VARITA = "VARITA",
    ANILLO = "ANILLO",
    
    ARROJADIZO = "ARROJADIZO", POCION = "POCION",
    
    CASCO = "CASCO", 
    
    PANTALON = "PANTALON", 
    
    BOTAS = "BOTAS",
    
    PECHERA = "PECHERA",AMULETO = "AMULETO", 
    
    ESCUDO = "ESCUDO", BARRERA_MAGICA = "BARRERA_MAGICA",
}

export interface TipoEnemigo {
    id: string,
    tipo: string
}