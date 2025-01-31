export default function help(args) {
  const commands = "Commands: \n" +
    ":help - Show this help message.\n" +
    ":entry [ls|list|add] - Manage dictionary entries.\n" +
    ":ls - List all entries, same as :entry ls.\n" +
    ":add [word] [defination] - Same as :entry add.\n" +
    ":search [keyword] - Search dictionary.\n" +
    ":function [ls|list] - List all support functions.\n" +
    ":location [on|off] - Switch on/off location service.\n" +
    ":log - Show current session log.\n" +
    ":log [session_id] - Show session logs.\n" +
    ":stats [on|off|show|hide] - Show/hide stats info.\n" +
    ":stream [on|off] - Switch on/off stream mode.\n" +
    ":speak [on|off] - Switch on/off auto speak.\n" +
    ":speak [stop] - Stop the current speak.\n" +
    ":stop - Stop the current speak, same as :speak stop.\n" +
    ":voice [ls|list] - List all support voices.\n" +
    ":voice use [voice_name] - Use voice.\n" + 
    ":lang [ls|list] - List all languages.\n" +
    ":lang use [language_code] - Use language.\n" +
    ":session [session_id] - Attach to session.\n" +
    ":role [ls|list|reset] - List all roles, reset role.\n" +
    ":role use [role_name] - Use role.\n" +
    ":info - Show current config info.\n" +
    ":clear - Clear output.\n";

  return commands;
}
