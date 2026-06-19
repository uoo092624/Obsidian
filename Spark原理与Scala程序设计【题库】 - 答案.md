# Spark原理与Scala程序设计【题库】-答案

**一、单项选择题**

【第一章】1.scala中下列关于Trait的说法正确的是（ C ）。

A. Trait不能包含具体方法

B. Trait不能定义属性

C. Trait可以实现类似多继承效果

D. Trait必须实例化后使用

【第一章】2.Scala中以下代码执行结果为（ B ）？

val x = List(1,2,3)

println(x.map(_*2))

A. List(1,2,3)   B. List(2,4,6)   C. 6    D. 编译错误

【第三章】3.Spark中Stage划分的依据是（ C ）。

A. Executor数量  B. Job数量   C. 宽依赖  D. 窄依赖

【第三章】4.下列RDD操作会产生Shuffle的是（ D ）。

A.. map    B. filter    C. flatMap  D. groupByKey

【第三章】5.RDD能够实现容错恢复的核心机制是（ C ）。

A. Cache

B. Persist

C. Lineage

D. Checkpoint

【第三章】6.下列属于Action算子的是（ C ）。

A. map

B. distinct

C. count

D. filter

【第三章】7.关于cache()与persist()描述正确的是（ C ）。

A. cache支持多种存储级别

B. persist只能存内存

C. cache是persist的特例

D. 两者完全无



【第四章】8.Spark SQL中DataFrame最大的特点是（B  ）。

A. 强类型

B. 含Schema信息

D. 不支持SQL

D. 不支持优化

【第四章】9.Dataset相比DataFrame增加了（ C ）。

A. 分布式计算       B. SQL功能

C. 类型安全        D. 缓存功能

【第四章】10.Spark SQL中创建临时视图的方法是（ B ）。

A. createTable()        B. createOrReplaceTempView()

C. register()         D. cacheTable()

【第七章】11.Spark Streaming中DStream本质上是（ B ）。

A. 一个RDD  B. 多个RDD组成的序列  C. DataFrame   D. Dataset

【第七章】12.Spark Streaming与传统MapReduce相比，更适合实时数据处理的主要原因是（ B ）。

A. 支持HDFS存储

B. 支持微批处理机制

C. 支持Java开发

D. 支持分布式部署

【第三章】13.下列属于窄依赖的是（ D ）。

A. join    B. reduceByKey     C. groupByKey   D. map

【第二章】14.Driver的主要职责是（ C ）。

A. 存储数据        B. 执行Task

C. 任务调度        D. 管理HDFS

【第四章】15.Spark程序运行入口通常是（ B ）。

A. SparkConf        B. SparkSession

C. Task         D. Executor

**二、填空题**

1. 【第一章】Scala中定义不可变变量使用关键字   。val
2. 【第一章】Scala中用于继承类的关键字是     。extends 
3. 【第一章】Scala中用于重写父类方法的关键字是    。override 
4. 【第三章】Spark中RDD操作分为    和    两类。转换操作/transform、行动操作/action
5. 【第二章】Spark中任务执行的最小单位称为    。Task
6. 【第二章】Spark生态系统包含    、Spark SQL、MLlib、    、Graph X以及独立调度器组件。Spark core 、Spark Streaming
7. 【第四章】Spark SQL中结构化数据的核心模型是    。DataFrame
8. 【第七章】Spark Streaming采用    处理模式。微批处理



**三、判断题**

1. Spark中的Transformation操作执行后会立即产生计算结果。   （  ）T

2. Scala支持函数作为参数传递。          （  ）T

3. Dataset同时具有RDD的类型安全特性和DataFrame的查询优化能力。 （  ）T

4. RDD采用惰性调用，即在RDD的处理过程中真正的计算发生在RDD的行动操作。（  ）T

5. collect()会返回所有数据到Driver端。        （  ）T

6. 使用groupByKey进行聚合时，通常比reduceByKey产生更多网络传输开销。（  ）T

7. DataFrame具有Schema信息。          （  ）T

8. Dataset兼具RDD和DataFrame部分优点。       （  ）T

9. Spark SQL支持直接查询Hive表。         （  ）T

10. Spark Streaming支持Kafka数据源。         （  ）T

    

**四、简答题**

【第二章】1．简述Spark与MapReduce的主要区别。

 Spark与MapReduce的主要区别体现在以下三个方面:

1、编程方式不同 

MapReduce主要围绕Map和Reduce两个过程展开，处理复杂业务时不够灵活;Spark提供了更丰富的算子和操作方式，编程模型更灵活。 

2、数据处理方式不同 

MapReduce通常要频繁进行磁盘读写，中间结果往往写入磁盘;Spark则更多依赖内存计算，可以把中间结果保存在内存中，从而减少磁盘I/O，提高运行速度。 

3、数据容错方式不同 

MapReduce主要通过备份数据和重新执行任务进行容错;Spark则通过RDD的血缘关系，在数据丢失时进行重新计算来恢复。



【第四章】2．简述 RDD 转换为 DataFrame 的两种方式。

 第一种是利用反射机制，通过 case class 自动推断 Schema;

第二种是编程方式手动定义 Schema，使用 StructType 和 StructField 创建 Schema 后再生成DataFrame。



【第三章】3．请说明RDD中转换算子与行动算子的区别，并分别举两个例子。

 RDD中的转换算子和行动算子的主要区别在于是否触发计算：转换算子（Transformation）用于对RDD进行转换生成新的RDD，但不会立即执行，而是构建执行计划，具有惰性执行特点；而行动算子（Action）会触发实际计算，并将结果返回给Driver或写入外部存储。常见的转换算子有map、filter、flatMap等，常见的行动算子有collect、count、take等。



【第九章】4．简述 Spark Streaming 的工作原理。

Spark Streaming 会从 Kafka、Socket、HDFS 等数据源实时接收数据流。接收到的数据不会逐条处理，而是按照时间间隔切分成多个 Batch，每个 Batch 对应一个 RDD，多个 RDD 构成 DStream。随后 Spark Engine 对这些 RDD 执行 map、reduce、join、window 等转换操作，最后将结果输出到 HDFS、MySQL、Dashboard 等外部系统。



**五、程序填空题**

【第三章】1、程序说明：读取学生成绩文件，筛选成绩大于80分的数据，并统计人数。

import org.apache.spark.{SparkConf,SparkContext}

 

object Test01{

 def main(args:Array[String]):Unit={

  val conf = new SparkConf().setAppName("Test01").setMaster("local")

  val sc = new SparkContext(conf)

 

  val data = sc.textFile("/data/score.txt")

 

  val result = data

   .map(_.toInt)

   .____________(_ > 80)

   println(result.____________())

 }

}

（1）补全筛选操作：___________1、filter

（2）补全统计操作：___________2、count

 

【第三章】2、程序说明：查询学生表中的姓名和年龄字段。

val lines = sc.textFile("/data/word.txt")

 

val words = lines.flatMap(_.split(" "))

 

val pairs = words.map(word => (word, _____ ))

 

val result = pairs._______________(_ + _)

 

result.foreach(println)补全两个字段名称。

（1）补全键值对映射：___________1、1

（2）补全聚合算子：___________2、reduceByKey

 

【第四章】3、程序说明：读取JSON文件并查询年龄大于25岁的用户。

val spark = SparkSession.builder()
 .appName("Test03")
 .getOrCreate()

val df = spark.read.____________("people.json")

df.________________________("person")

spark.sql(
 "select * from person where age > 25"
).show()

（1）补全读取JSON方法：__________1、json

（2）补全创建临时视图方法：__________2、createOrReplaceTempView



【第四章】4、程序说明：查询学生表中的姓名和年龄字段。

val df = spark.read.json("student.json")

 

df.select(

 "_______",

 "_______"

).show()

补全两个字段名称。

（1）__________(2分)1、name

（2）__________(2分)2、age

 

【第九章】5、程序说明：创建StreamingContext，每5秒处理一次数据。

import org.apache.spark.streaming._

 

val conf = new SparkConf()

 .setAppName("Test05")

 .setMaster("local[2]")

 

val ssc =

 new StreamingContext(

  conf,

  Seconds(_______)

 )

 

ssc.start()

ssc.awaitTermination()

补全时间间隔参数：__________1、5



**六、编程题**

【第三章】1、学生成绩统计

文件 /home/charles/score.txt 中存放学生成绩数据，格式如下：

Tom 语文 85

Tom 数学 90

Jack 语文 78

Jack 数学 88

Lucy 语文 95

Lucy 数学 92

（1）读取文件数据；

 val lines = sc.textFile("/home/charles/score.txt")

（2）将每行数据转换为 (姓名, 成绩) 的键值对；

 val pairRDD = lines.map(line => {
val arr = line.split(" ")
(arr(0), arr(2).toInt)

（3）统计每个学生的总成绩；

 val totalScore = pairRDD.reduceByKey(_ + _)

（4）按照总成绩从高到低排序并打印输出。

val result = totalScore.sortBy(_._2, false)
result.collect().foreach(println)

【第七章】2、员工信息Spark SQL查询

给出数据文件 /usr/local/spark/employee.json，数据格式如下：

{"id":1,"name":"Ella","dept":"tech","salary":8000}

{"id":2,"name":"Bob","dept":"sales","salary":6500}

{"id":3,"name":"Jack","dept":"tech","salary":9000}

{"id":4,"name":"Jim","dept":"sales","salary":7000}

{"id":5,"name":"Damon","dept":"tech","salary":7500}

在spark-shell环境下使用 Spark SQL 完成：

（1）创建 DataFrame；

 val df = spark.read.json("/usr/local/spark/employee.json")

（2）创建临时视图 employee；

 df.createOrReplaceTempView("employee")

（3）查询工资大于7000的员工姓名、部门和工资；

 spark.sql(
"""
select name,dept,salary
from employee
where salary > 7000
"""
).show()

（4）按部门统计平均工资并输出。

spark.sql(
"""
select dept,
avg(salary) as avg_salary
from employee
group by dept
"""
).show()