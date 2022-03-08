package cn.cocowwy.showdbcore.strategy;

import java.util.List;

/**
 * @author Cocowwy
 * @create 2022-03-03-20:05
 */
public interface StructExecuteStrategy extends SqlExecuteStrategy {
    /**
     * 表结构文档
     */
    void tableDoc(String tableName);


    /**
     * 表名集合
     * @return
     */
    List<String> tableNames();
}
