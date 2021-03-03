enum StrategyTypeEnum {
  S1 = 'type1',
  S2 = 'type1'
}

interface AbstractStrategy<T> {
  getResult(): T
}
interface Result1 {
  prop11: string
  prop12: string
}

interface Result2 {
  prop21: string
  prop22: string
}

interface Strategy1 extends AbstractStrategy<Result1>{}
interface Strategy2 extends AbstractStrategy<Result2>{}

interface TypeToStrategyMap  {
  type1: Strategy1
  type2: Strategy2
}

class StrategyViewer<T extends StrategyTypeEnum>{
  strategy: TypeToStrategyMap[T]
  result: ReturnType<TypeToStrategyMap[T]['getResult']>
  constructor(strategyType: T, map: TypeToStrategyMap){
    this.strategy = map[strategyType]
    this.result = this.strategy.getResult()
  }
}
