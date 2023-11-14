# Koala Boot Starter

考拉程序启动模块, 拓展`ApplicationRunner`

## 快速开始

### 编写`Runner`

```java
public class MyApplicationRunner extends AbstractApplicationRunner {
  
  @Override
  protected String getName() {
    return 'my-runner';
  }
  
  @Override
  protected boolean getDefault() {
    return false;
  }
  
  @Override
  public void doRun(ApplicationArguments args) {
    // 执行逻辑...
  }
}
```

### 配置

```yaml
koala:
  boot:
    runners:
      my-runner: true
```

## 进阶

### 自定义 `Runner` 配置注册表

模块将 `Runner` 配置统一保存在注册表中, 默认注册表为 `InMemoryApplicationRunnerConfigRegistry`

如果您需要自定义, 可实现接口 `ApplicationRunnerConfigRegistry`:

```java
@Component
public class MyApplicationRunnerConfigRegistry implements ApplicationRunnerConfigRegistry {
  
  @Override
  public boolean getConfig(String name) {
    // 获取配置逻辑...
  }
  
  @Override
  public boolean getConfigOrDefault(String name, boolean defaultValue) {
    // 获取配置或默认逻辑...
  }
}
```



