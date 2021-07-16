/* Copyright 2020 The FedLearn Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package com.jdt.fedlearn.coordinator.type;


/**
 * @author wangpeiqi
 * @version 0.8.2
 * 训练状态变更类型，包含停止，暂停和恢复,
 * 接口返回类型为小写
 */
public enum StateChangeType {
    stop("stop"),
    suspend("suspend"),
    resume("resume");

    private final String type;

    StateChangeType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}