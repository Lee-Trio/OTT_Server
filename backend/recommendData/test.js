import child from "child_process";

const result = child.spawn("pip", ["./set_key_datas.py"]);

result.on("data", (data) => {
  console.log(data);
});
