export class RankUtils {
    static confirmRank(
        userList: { score: number, userId: string, rank?: number }[],
        rankConfigs: { ranking?: number[], rankingCondition?: number }[],
        limit: number,
    ) {
        let rwdConfigIndex = 0;
        let rankConfig = rankConfigs[rwdConfigIndex];
        let rank = 1;
        let userIndex = 0;
        let user = userList[userIndex];
        while (rank < limit && user) {
            if (!rankConfig) { break; }

            if (rank > rankConfig.ranking[1] || user.score < rankConfig.rankingCondition) {
                rwdConfigIndex += 1;
                rankConfig = rankConfigs[rwdConfigIndex];
                continue;
            }
            user.rank = rank;
            userIndex += 1;
            user = userList[userIndex];
            rank += 1;
        }
    }
}
