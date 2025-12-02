import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { StaticDocument } from "@/document";
import { IndexPage } from "@/index";

export type AppContext = {};

// @ts-expect-error
export default defineApp([render(StaticDocument, [route("/", IndexPage)])]);
