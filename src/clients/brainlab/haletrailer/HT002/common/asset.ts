import { SuggestionModel } from "../models/suggestion.model";

export const selectors = {
  searchBar: "div.top-search-wrap",
  contactBar: "div.contact-bar",
  searchInput: "input.uk-search-input",
};

export const suggestions: SuggestionModel[] = [
  {
    title: "New Trailers",
    imgSrc:
      "https://trailerimages.haletrailer.com/inv/imgs/series/008757-008806-1.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&fit=clamp&w=520&h=390&mark64=aHR0cHM6Ly9oYWxlLXdwbWVkaWEuaW1naXgubmV0LzIwMTkvMTEvaGFsZS13YXRlcm1hcmsyLnBuZz93PTIwMCZhdXRvPWNvbXByZXNzJTJDZm9ybWF0&mark-align=bottom,left",
    href: "https://haletrailer.com/trailer/",
  },
  {
    title: "Used Trailers",
    imgSrc:
      "https://trailerimages.haletrailer.com/inv/imgs/series/008218-008222-1.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&fit=clamp&w=520&h=390&mark64=aHR0cHM6Ly9oYWxlLXdwbWVkaWEuaW1naXgubmV0LzIwMTkvMTEvaGFsZS13YXRlcm1hcmsyLnBuZz93PTIwMCZhdXRvPWNvbXByZXNzJTJDZm9ybWF0&mark-align=bottom,left",
    href: "https://haletrailer.com/used-inventory/",
  },
  {
    title: "Rentals",
    imgSrc:
      "https://trailerimages.haletrailer.com/inv/imgs/series/004136-004156-1.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&fit=clamp&w=520&h=390&mark64=aHR0cHM6Ly9oYWxlLXdwbWVkaWEuaW1naXgubmV0LzIwMTkvMTEvaGFsZS13YXRlcm1hcmsyLnBuZz93PTIwMCZhdXRvPWNvbXByZXNzJTJDZm9ybWF0&mark-align=bottom,left",
    href: "https://haletrailer.com/rental-information/",
  },
  {
    title: "Office Trailers",
    imgSrc:
      "https://trailerimages.haletrailer.com/inv/imgs/trailer/021817-2007MARKLINE-1.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&fit=clamp&w=520&h=390&mark64=aHR0cHM6Ly9oYWxlLXdwbWVkaWEuaW1naXgubmV0LzIwMTkvMTEvaGFsZS13YXRlcm1hcmsyLnBuZz93PTIwMCZhdXRvPWNvbXByZXNzJTJDZm9ybWF0&mark-align=bottom,left",
    href: "https://haletrailer.com/status/office/",
  },
  {
    title: "Storage Containers",
    imgSrc:
      "https://trailerimages.haletrailer.com/inv/imgs/series/40-40-1.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&fit=clamp&w=520&h=390&mark64=aHR0cHM6Ly9oYWxlLXdwbWVkaWEuaW1naXgubmV0LzIwMTkvMTEvaGFsZS13YXRlcm1hcmsyLnBuZz93PTIwMCZhdXRvPWNvbXByZXNzJTJDZm9ybWF0&mark-align=bottom,left",
    href: "https://haletrailer.com/status/storage/",
  },
];

export const componentHeading: string =
  "Still Looking for Trailers and Containers?";
