initSidebarItems({"enum":[["ControlMsg",""],["ProgressMsg","Messages sent in response to a `Load` message"]],"struct":[["LoadData",""],["LoadResponse","Message sent in response to `Load`.  Contains metadata, and a port for receiving the data."],["Metadata","Metadata about a loaded resource, such as is obtained from HTTP headers."],["ProgressMsgPortIterator","Iterator that reads chunks of bytes from a ProgressMsg port"],["ResourceCORSData",""],["ResponseSenders",""],["TargetedLoadResponse","A LoadResponse directed at a particular consumer"]],"type":[["ResourceTask","Handle to a resource task"]],"fn":[["global_init",""],["load_bytes_iter","Load a URL asynchronously and iterate over chunks of bytes from the response."],["load_whole_resource","Convenience function for synchronously loading a whole resource."],["new_resource_task","Create a ResourceTask"],["parse_hostsfile",""],["replace_hosts",""],["start_sending","For use by loaders in responding to a Load message."],["start_sending_opt","For use by loaders in responding to a Load message."]]});